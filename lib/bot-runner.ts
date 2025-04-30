// lib/bot-runner.ts
import { startAlertCronJob } from '@/lib/cron-job'; 

console.log('🤖 Telegram Bot and Cron Job initialized.');
startAlertCronJob();
