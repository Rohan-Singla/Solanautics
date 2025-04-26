import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  try {
    // ✅ No need to fetch any userId from URL anymore
    // ✅ Just check if any Telegram chat exists
    const telegramChat = await prisma.telegramChat.findFirst({
      orderBy: { createdAt: 'desc' }, // Get the latest connected chat if multiple
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
