// app/api/price-alerts/set/volatility-alert-route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import "@/lib/bot-loader"; 


export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("🚀 Incoming data:", body);

    const { userId, mode, duration, tokenAddress } = body;

    if (!userId || !tokenAddress || mode !== 'default') {
      return NextResponse.json({ error: 'Missing or invalid required fields' }, { status: 400 });
    }

    
    const apiKey = process.env.SOLSCAN_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Solscan API key is missing' }, { status: 500 });
    }

    const apiUrl = `https://pro-api.solscan.io/v2.0/token/price?address=${tokenAddress}`;
    const res = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'token': apiKey,
      },
    });

    const data = await res.json();
    const priceList = data?.data;

    if (!Array.isArray(priceList) || priceList.length < 2) {
      return NextResponse.json({ error: 'Not enough price data from Solscan' }, { status: 400 });
    }

    const currentPrice = parseFloat(priceList[priceList.length - 1]?.price);
    const prevPrice = parseFloat(priceList[priceList.length - 2]?.price);

    if (isNaN(currentPrice) || isNaN(prevPrice) || currentPrice <= 0 || prevPrice <= 0) {
      return NextResponse.json({ error: 'Invalid price data from Solscan' }, { status: 400 });
    }

    const calculatedVolatility = Math.abs((currentPrice - prevPrice) / prevPrice) * 100;
    const finalThreshold = parseFloat(calculatedVolatility.toFixed(2));

    const telegramChat = await prisma.telegramChat.findFirst({
      where: { userId },
    });

    if (!telegramChat) {
      return NextResponse.json({ error: 'Telegram Chat ID not found for this user.' }, { status: 404 });
    }


    const alert = await prisma.priceAlert.create({
      data: {
        userId,
        type: 'Volatility',
        threshold: finalThreshold,
        duration: duration ?? 24,
        chatId: userId,
      },
    });

    // Add the Telegram bot link here
    const telegramBotLink = 'https://t.me/Solanautics_Alerts_bot';
    console.log("Generated telegram link:", telegramBotLink);

    return NextResponse.json({ 
      message: 'Volatility alert created successfully', 
      alert,
      telegramLink: 'https://t.me/Solanautics_Alerts_bot' // Include Telegram link in response
    }, { status: 201 });

  } catch (err: any) {
    console.error('❌ Error in volatility route:', err);
    return NextResponse.json({ error: err.message || 'Something went wrong' }, { status: 500 });
  }
}
