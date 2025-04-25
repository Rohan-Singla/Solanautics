// lib/telegram-bot.ts

import TelegramBot, { Message } from 'node-telegram-bot-api';
import { prisma } from './prisma';

const token = process.env.TELEGRAM_BOT_TOKEN!;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg: Message) => {
  const chatId = msg.chat.id.toString();
  const userId = chatId; // We're treating Telegram chatId as userId in this setup

  // 1. Save chat ID to TelegramChat model if not exists
  const existingChat = await prisma.telegramChat.findUnique({ where: { chatId } });

  if (!existingChat) {
    await prisma.telegramChat.create({
      data: {
        userId,
        chatId,
      },
    });
  }

  // 2. Link this chatId to any existing alerts without chatId
  await prisma.priceAlert.updateMany({
    where: {
      userId,
      chatId: null,
    },
    data: {
      chatId,
    },
  });

  // 3. Send confirmation
  bot.sendMessage(
    chatId,
    `🚀 You're now connected to Solanautics Alerts! We'll notify you when any of your alert conditions are triggered.`
  );
});

export { bot };
