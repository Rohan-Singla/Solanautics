// app/api/price-alerts/set/range-alert-route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import "@/lib/bot-loader"; 


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, minPrice, maxPrice } = body;

    if (!userId || minPrice === undefined || maxPrice === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const telegramChat = await prisma.telegramChat.findFirst({
      where: { userId },
    });

    if (!telegramChat) {
      return NextResponse.json({ error: 'Telegram Chat ID not found for this user.' }, { status: 404 });
    }

    const alert = await prisma.priceAlert.create({
      data: {
        userId,
        type: 'Range',
        minPrice,
        maxPrice,
        chatId: telegramChat.chatId,
      },
    });

    // Add the Telegram bot link here
    const telegramBotLink = 'https://t.me/Solanautics_Alerts_bot';

    return NextResponse.json({ 
      message: 'Range alert created successfully', 
      alert,
      telegramLink: telegramBotLink  // Include Telegram link in response
    }, { status: 201 });

  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Something went wrong' }, { status: 500 });
  }
}
