import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import cron from 'node-cron';

// Local in-memory storage for wallets
let trackedWallets: string[] = [];

// Function to update wallets
async function updateTrackedWallets() {
    const SOLSCAN_API_KEY = process.env.SOLSCAN_API_KEY ?? '';

    if (!SOLSCAN_API_KEY) {
        console.error('Solscan API key is not set');
        return;
    }

    console.log('Running daily Solscan cron job...');

    try {
        // Assuming trackedWallets is already populated with wallet addresses to track
        let updatedWallets = [];

        for (const walletAddress of trackedWallets) {
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

            console.log(`Fetched latest transactions for ${walletAddress}:`, response.data);

            updatedWallets.push({
                walletAddress,
                transactions: response.data,
            });
        }

        localStorage.setItem("tracked_wallets", JSON.stringify(updatedWallets));

        console.log('Updated tracked wallets in localStorage');

    } catch (err: any) {
        console.error('Error running cron job:', err.message);
    }
}

// Setup cron job to run daily at midnight
cron.schedule('0 0 * * *', async () => {
    await updateTrackedWallets();
});

// POST handler: Add a wallet to tracking and fetch data
export async function POST(req: NextRequest) {
    try {
        const { walletAddress } = await req.json();

        console.log('Received Wallet Address:', walletAddress);

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

        // Add to tracked wallets if not already present
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

// (Optional) GET handler to fetch current tracked wallets
export async function GET() {
    return NextResponse.json({ trackedWallets });
}
