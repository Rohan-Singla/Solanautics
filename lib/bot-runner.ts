// lib/bot-runner.ts
import { startAlertCronJob } from "@/lib/cron-job";

// ✅ Start manually
console.log("🤖 Telegram Bot initialized.");
startAlertCronJob();
