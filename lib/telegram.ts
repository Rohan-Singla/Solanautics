import axios from 'axios';

const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

export const sendTelegramMessage = async (chatId: string, message: string) => {
  try {
    const res = await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: message,
    });
    return res.data;
  } catch (error) {
    console.error('Failed to send Telegram message:', error);
  }
};
