import cron from 'node-cron';
import { prisma } from './prisma';
import { sendTelegramMessage } from './telegram';
import axios from 'axios';

// Your SOL price API
const SOLSCAN_PRICE_URL = process.env.SOLSCAN_PRICE_URL!;
const TELEGRAM_BOT_LINK = "https://t.me/Solanautics_Alerts_bot";

// 🚀 Immediately Start Cron When File is Imported
startAlertCronJob();

// Fetch Current SOL Price properly
async function fetchCurrentSolPrice(): Promise<number | null> {
  try {
    const res = await axios.get(SOLSCAN_PRICE_URL, {
      headers: { token: process.env.NEXT_PUBLIC_SOLSCAN_API_KEY! },
    });

    console.log("📦 Full Solscan API response:", JSON.stringify(res.data, null, 2));

    const priceList = res.data?.data;
    const latestPrice = priceList?.[priceList.length - 1]?.price;

    if (typeof latestPrice !== 'number') {
      throw new Error('Invalid latest price from Solscan');
    }

    return latestPrice;
  } catch (error) {
    console.error('❌ Failed to fetch SOL price:', error);
    return null;
  }
}

// Main Cron Function
export function startAlertCronJob() {
  console.log('🚀 Starting Cron Job to monitor alerts...');

  cron.schedule('*/50 * * * * *', async () => {
    console.log('⏰ Checking alerts...');

    const currentPrice = await fetchCurrentSolPrice();
    if (currentPrice === null) {
      console.error('❌ Could not fetch SOL price. Skipping this cycle.');
      return;
    }

    console.log(`🔵 Current SOL Price: $${currentPrice}`);

    const alerts = await prisma.priceAlert.findMany({
      where: { chatId: { not: null } },
    });

    const flooredPrice = Math.floor(currentPrice);

    for (const alert of alerts) {
      const { type, threshold, minPrice, maxPrice, chatId } = alert;
      if (!chatId) continue;

      // 🔥 Handle Price Alert
      if (type === 'Price' && threshold !== null) {
        console.log(`🧪 Comparing: current floored price = ${flooredPrice}, alert threshold floored = ${Math.floor(threshold!)}`);

        if (flooredPrice === Math.floor(threshold)) {
          await sendTelegramMessage(
            chatId,
            `🚀 SOL price is around $${currentPrice} (rounded: $${flooredPrice}), matching your alert of $${threshold}! 🎯`
          );
          console.log(`✅ Price alert triggered for chatId ${chatId}`);
        }
      }

      // 🔥 Handle Range Alert
      if (type === 'Range' && minPrice !== null && maxPrice !== null) {
        if (
          flooredPrice < Math.floor(minPrice) ||
          flooredPrice > Math.floor(maxPrice)
        ) {
          await sendTelegramMessage(
            chatId,
            `⚡ SOL price ($${currentPrice}) moved outside your set range ($${minPrice} - $${maxPrice})!`
          );
          console.log(`✅ Range alert triggered for chatId ${chatId}`);
        }
      }

      // 🔥 Handle Volatility Alert (optional)
      if (type === 'Volatility' && threshold !== null) {
        // Volatility logic can be added later
      }
    }
  });
}
