import TelegramBot, { Message } from 'node-telegram-bot-api';
import { prisma } from './prisma';

// Get the token from env
const token = process.env.TELEGRAM_BOT_TOKEN!;
const bot = new TelegramBot(token, { polling: true });

// Listen for /start command
bot.onText(/\/start/, async (msg:Message) => {
  const chatId = msg.chat.id.toString();

  // Optional: Save chat ID to DB if not already saved
  const existing = await prisma.priceAlert.findFirst({ where: { userId: chatId } });
  if (!existing) {
    await prisma.priceAlert.create({
      data: {
        userId: chatId,
        type: 'Welcome',
        threshold: 0,
      },
    });
  }

  // Reply to user
  bot.sendMessage(chatId, `👋 Hey ${msg.chat.first_name || 'friend'}! You're now connected with our alert bot. Stay tuned for updates!`);
});

export { bot };
