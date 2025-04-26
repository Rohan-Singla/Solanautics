// app/Price_alerts/layout.tsx
import { startAlertCronJob } from '@/lib/cron-job';
import React from 'react';

startAlertCronJob(); 

export const metadata = {
  title: 'Price Alerts | Solanautics',
  description: 'Get real-time SOL price alerts',
};

export default function PriceAlertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
