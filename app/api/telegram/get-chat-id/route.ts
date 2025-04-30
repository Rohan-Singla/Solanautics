import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const telegramChat = await prisma.telegramChat.findFirst({
      orderBy: { createdAt: 'desc' },
    });

    if (!telegramChat) {
      return NextResponse.json({ error: 'Telegram chat not found' }, { status: 404 });
    }

    return new NextResponse(
      JSON.stringify({ chatId: telegramChat.chatId }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store',
        },
      }
    );
  } catch (error: any) {
    console.error('❌ Error fetching Telegram chat ID:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
