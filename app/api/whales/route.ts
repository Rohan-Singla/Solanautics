import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { walletAddress } = await req.json();

        console.log('Wallet Address:', walletAddress);

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

        console.log('Solscan Response:', response.data);

        return NextResponse.json(response.data);

    } catch (err) {
        console.error('Solscan API error:', err);  // Log the error
        return NextResponse.json({ error: 'Failed to fetch Solscan data', details: err.message }, { status: 500 });
    }
}
