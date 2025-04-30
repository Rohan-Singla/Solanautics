import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import cron from 'node-cron';

// Local in-memory storage for wallets
let trackedWallets: string[] = [];

// Function to load tracked wallets (replace with a DB or persistent store in production)
function loadTrackedWalletsFromLocalStorage() {
    const storedWallets = localStorage.getItem("tracked_wallets");
    return storedWallets ? JSON.parse(storedWallets) : [];
}

// Function to send Telegram notifications
async function sendTelegramNotification(userId: string, walletAddress: string, latestTx: string) {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';

    if (!TELEGRAM_BOT_TOKEN) {
        console.error('Telegram bot token is missing');
        return;
    }

    const message = `Wallet ${walletAddress} has a new transaction! The latest TX hash: ${latestTx}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
        await axios.post(url, {
            chat_id: userId,
            text: message,
        });
        console.log(`Notification sent to user ${userId} for wallet ${walletAddress}`);
    } catch (error: any) {
        console.error('Error sending Telegram notification:', error.message);
    }
}

// Function to update wallets
async function updateTrackedWallets() {
    const SOLSCAN_API_KEY = process.env.SOLSCAN_API_KEY ?? '';

    if (!SOLSCAN_API_KEY) {
        console.error('Solscan API key is not set');
        return;
    }

    console.log('Running daily Solscan cron job...');

    try {
        let trackedWallets = loadTrackedWalletsFromLocalStorage();
        let updatedWallets = [];

        for (let wallet of trackedWallets) {
            const url = "https://pro-api.solscan.io/v2.0/account/transactions";

            const response = await axios.get(url, {
                params: {
                    address: wallet.address,
                    limit: 10,
                },
                headers: {
                    token: SOLSCAN_API_KEY,
                },
            });

            const latestTx = response.data.data[0]?.txHash;
            console.log(`Fetched latest transaction for ${wallet.address}:`, latestTx);

            if (latestTx !== wallet.latestTx) {
                wallet.latestTx = latestTx;
                await sendTelegramNotification(wallet.rawAddress, wallet.address, latestTx);
            }

            updatedWallets.push(wallet);
        }

        localStorage.setItem("tracked_wallets", JSON.stringify(updatedWallets));
        console.log('Updated tracked wallets in localStorage');
    } catch (err: any) {
        console.error('Error updating tracked wallets:', err.message);
    }
}

// Setup cron job to run daily at midnight (currently set to every minute for testing)
cron.schedule('* * * * *', async () => {
    await updateTrackedWallets();
});

// POST handler: Add a wallet and fetch its data
export async function POST(req: NextRequest) {
    try {
        const { walletAddress } = await req.json();

        if (!walletAddress) {
            throw new Error('Wallet address is required');
        }

        const SOLSCAN_API_KEY = process.env.SOLSCAN_API_KEY ?? '';

        if (!SOLSCAN_API_KEY) {
            throw new Error('Solscan API key is not set');
        }

        const url = "https://pro-api.solscan.io/v2.0/account/transactions";

        const response = await axios.get(url, {
            params: {
                address: walletAddress,
                limit: 10,
            },
            headers: {
                token: SOLSCAN_API_KEY,
            },
        });

        if (!trackedWallets.includes(walletAddress)) {
            trackedWallets.push(walletAddress);
        }

        console.log('Solscan Response:', response.data);
        return NextResponse.json(response.data);

    } catch (err: any) {
        console.error('Solscan API error:', err);
        return NextResponse.json({ error: 'Failed to fetch Solscan data', details: err.message }, { status: 500 });
    }
}
