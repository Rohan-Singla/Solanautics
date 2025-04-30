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
  const userId = chatId; // Telegram chatId = userId

  console.log('🔔 /start received from chatId:', chatId);

  try {
  
    const existingChat = await prisma.telegramChat.findFirst({ where: { chatId } });

    if (!existingChat) {
      console.log('➕ No existing chat found. Creating TelegramChat...');
      await prisma.telegramChat.create({
        data: { userId, chatId },
      });
      console.log('✅ Created TelegramChat entry.');
    } else {
      console.log('ℹ️ Chat already exists. Skipping creation.');
    }

    // 🔗 Link chatId to any price alerts without chatId
    await prisma.priceAlert.updateMany({
      where: { userId, chatId: null },
      data: { chatId },
    });
    console.log('🔗 Linked chatId to price alerts.');

    // 📩 Send welcome message
    await bot.sendMessage(
      chatId,
      `🚀 You are now connected to Solanautics Alerts! You'll receive price notifications.`
    );
  } catch (error: any) {
    console.error('❌ Error during /start processing:', error.message);
    await bot.sendMessage(chatId, '❌ Failed to connect you. Please try again later.');
  }
});

export { bot };
