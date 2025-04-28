import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  try {
    const searchParams = new URL(req.url).searchParams;
    const userId = searchParams.get('userId'); // ✅ get userId from frontend query

    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
    }

    const telegramChat = await prisma.telegramChat.findFirst({
      where: { userId }, // ✅ Find TelegramChat for that specific user
    });

    if (!telegramChat) {
      return NextResponse.json({ error: 'Telegram chat not found' }, { status: 404 });
    }

    return NextResponse.json({ chatId: telegramChat.chatId }, { status: 200 });
  } catch (error: any) {
    console.error('❌ Error fetching Telegram chat ID:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
