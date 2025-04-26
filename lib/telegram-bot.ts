// lib/telegram-bot.ts

import TelegramBot, { Message } from 'node-telegram-bot-api';
import { prisma } from './prisma';

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error('❌ TELEGRAM_BOT_TOKEN is missing!');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg: Message) => {
  const chatId = msg.chat.id.toString();
  const userId = chatId; // We treat Telegram chatId as userId for simplicity

  console.log('🔔 /start received from chatId:', chatId);

  try {
    // Check if chat already exists
    const existingChat = await prisma.telegramChat.findUnique({ where: { chatId } });

    if (!existingChat) {
      console.log('➕ No existing chat found. Creating TelegramChat...');
      await prisma.telegramChat.create({
        data: {
          userId,
          chatId,
        },
      });
      console.log('✅ Created TelegramChat entry.');
    } else {
      console.log('ℹ️ Chat already exists. Skipping creation.');
    }

    // Link chatId to existing alerts without chatId
    await prisma.priceAlert.updateMany({
      where: { userId, chatId: null },
      data: { chatId },
    });
    console.log('🔗 Linked chatId to price alerts if any.');

    // Send welcome message
    await bot.sendMessage(
      chatId,
      `🚀 You're now connected to Solanautics Alerts! We'll notify you when your alert triggers.`
    );
  } catch (error) {
    console.error('❌ Error during /start processing:', error);
  }
});

export { bot };
