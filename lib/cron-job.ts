import cron from 'node-cron';
import { prisma } from './prisma';
import { sendTelegramMessage } from './telegram';
import axios from 'axios';

const SOLSCAN_PRICE_URL = process.env.SOLSCAN_PRICE_URL!;
const TELEGRAM_BOT_LINK = "https://t.me/Solanautics_Alerts_bot";

//startAlertCronJob();

async function fetchCurrentSolPrice(): Promise<number | null> {
  try {
    const res = await axios.get(SOLSCAN_PRICE_URL, {
      headers: { token: process.env.SOLSCAN_API_KEY! },
    });

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

export function startAlertCronJob() {
  console.log('🚀 Starting Cron Job to monitor alerts...');

  cron.schedule('0 * * * *', async () => { 
    console.log('⏰ Checking alerts...');

    const currentPrice = await fetchCurrentSolPrice();
    if (currentPrice === null) {
      console.error('❌ Could not fetch SOL price. Skipping this cycle.');
      return;
    }

    console.log(`🔵 Current SOL Price: $${currentPrice}`);
    const flooredPrice = Math.floor(currentPrice);

    const alerts = await prisma.priceAlert.findMany({
      where: { chatId: { not: null } },
    });

    const now = new Date();

    for (const alert of alerts) {
      const { id, type, threshold, minPrice, maxPrice, chatId, triggeredAt, lastPriceNotified } = alert;
      if (!chatId) continue;

      // Special movement check
      let movementPassed = false;

      if (lastPriceNotified !== null) {
        const priceChangePercent = Math.abs((currentPrice - lastPriceNotified) / lastPriceNotified) * 100;
        movementPassed = priceChangePercent >= 5; // 5% movement needed
      }

      if (type === 'Price' && threshold !== null) {
        const thresholdFloor = Math.floor(threshold);

        if (flooredPrice === thresholdFloor) {
          if (movementPassed || !triggeredAt) {
            await sendTelegramMessage(
              chatId,
              `🚀 SOL price is around $${currentPrice}, matching your alert of $${threshold}! 🎯`
            );
            console.log(`✅ Price alert triggered for chatId ${chatId}`);
            await prisma.priceAlert.update({
              where: { id },
              data: { triggeredAt: now, lastPriceNotified: currentPrice },
            });
          } else {
            console.log(`💤 No major price movement for alert ${id}.`);
          }
        } else {
          // Price moved away → reset
          if (triggeredAt !== null) {
            console.log(`🔄 Price moved away. Resetting trigger for alert ${id}`);
            await prisma.priceAlert.update({
              where: { id },
              data: { triggeredAt: null, lastPriceNotified: null },
            });
          }
        }
      }

      if (type === 'Range' && minPrice !== null && maxPrice !== null) {
        if (flooredPrice < Math.floor(minPrice) || flooredPrice > Math.floor(maxPrice)) {
          if (movementPassed || !triggeredAt) {
            await sendTelegramMessage(
              chatId,
              `⚡ SOL price ($${currentPrice}) moved outside your set range ($${minPrice} - $${maxPrice})!`
            );
            console.log(`✅ Range alert triggered for chatId ${chatId}`);
            await prisma.priceAlert.update({
              where: { id },
              data: { triggeredAt: now, lastPriceNotified: currentPrice },
            });
          } else {
            console.log(`💤 No major movement for Range alert ${id}.`);
          }
        } else {
          // Price back inside range → reset
          if (triggeredAt !== null) {
            console.log(`🔄 Price back inside range. Resetting trigger for alert ${id}`);
            await prisma.priceAlert.update({
              where: { id },
              data: { triggeredAt: null, lastPriceNotified: null },
            });
          }
        }
      }
      // Volatility feature 
      if (type === 'Volatility' && threshold !== null) {
        if (movementPassed && Math.abs((currentPrice - lastPriceNotified!) / lastPriceNotified!) * 100 >= threshold) {
          await sendTelegramMessage(
            chatId,
            `🌪️ SOL price volatility detected! Price swing > ${threshold}%`
          );
          console.log(`✅ Volatility alert triggered for chatId ${chatId}`);
          await prisma.priceAlert.update({
            where: { id },
            data: { triggeredAt: now, lastPriceNotified: currentPrice },
          });
        } else {
          console.log(`💤 No major volatility for alert ${id}.`);
        }
      }
     
    }
  });
}
