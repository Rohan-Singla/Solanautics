// app/api/price-alerts/set/price-alert-route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, threshold } = body;

    if (!userId || threshold === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const alert = await prisma.priceAlert.create({
      data: {
        userId,
        type: 'Price',
        threshold: parseFloat(threshold),
      },
    });

    // Add the Telegram bot link here
    const telegramBotLink = 'https://t.me/Solanautics_Alerts_bot';

    return NextResponse.json({ 
      message: 'Price alert created successfully', 
      alert,
      telegramLink: telegramBotLink  // Include Telegram link in response
    }, { status: 201 });

  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Something went wrong' }, { status: 500 });
  }
}
