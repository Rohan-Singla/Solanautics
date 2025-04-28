// lib/bot-runner.ts

import { bot } from "@/lib/telegram-bot";
import { startAlertCronJob } from "@/lib/cron-job";

// ✅ Start manually
console.log("🤖 Telegram Bot initialized.");
startAlertCronJob();
