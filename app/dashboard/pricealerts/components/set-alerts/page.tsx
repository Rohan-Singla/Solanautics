'use client';

import React, { useState } from 'react';
import { Bell, Zap, TrendingUp, ArrowRight, X } from 'lucide-react';
import AlertTypeCard from './alert-type';
import AlertForm from './alert-form';

type AlertType = 'Price' | 'Volatility' | 'Range' | null;

interface PriceAlertData {
  type: 'Price';
  threshold: number;
}

interface VolatilityAlertData {
  type: 'Volatility';
  mode: 'default';
  tokenAddress: string;
}

interface RangeAlertData {
  type: 'Range';
  minPrice: number;
  maxPrice: number;
}

type AlertFormData = PriceAlertData | VolatilityAlertData | RangeAlertData;

const SetAlertsPage = () => {
  const [selectedAlert, setSelectedAlert] = useState<AlertType>(null);
  const [showTelegramPrompt, setShowTelegramPrompt] = useState(false); // State for showing Telegram prompt

  const handleFormSubmit = async (data: AlertFormData) => {
    const token = process.env.SOLSCAN_API_KEY;
    if (!token) {
      alert('Missing Solscan API token.');
      return;
    }

    const base = '/api/price-alerts/set';
    const endpoint =
      selectedAlert === 'Volatility'
        ? `${base}/volatility-alert`
        : selectedAlert === 'Price'
        ? `${base}/price-alert`
        : `${base}/range-alert`;

    const payload = {
      ...data,
      userId: 'user123', // replace with real user/telegram ID in production
    };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          token,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to create alert');
      const result = await res.json();
      console.log('✅ API Response:', result);
      alert('Alert created successfully!');
      
      // Show the Telegram prompt after alert creation
      setShowTelegramPrompt(true);
    } catch (err) {
      console.error('❌ Error:', err);
      alert('Failed to create alert.');
    }
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 md:py-32 w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-zinc-950 to-zinc-950" />
      <div className="container relative z-10 mx-auto md:px-6">
        <div className="grid gap-12 md:grid-cols-1 md:gap-16">
          <div className="flex flex-col justify-center space-y-8 px-5">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-cyan-800/40 bg-cyan-950/30 px-3 py-1 text-sm text-cyan-400">
                <Zap className="mr-1 h-3.5 w-3.5" />
                Set Your Alerts
              </div>
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                Get Notified on <span className="text-cyan-400">Market Movements</span>
              </h1>
              <p className="max-w-[600px] text-zinc-400 md:text-xl">
                Set price alerts, volatility alerts, or range alerts to stay on top of market changes in real-time.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 py-6">
              <AlertTypeCard
                title="Volatility Alert"
                description="Set an alert when the market shows significant volatility. Track fluctuations in price."
                icon={<TrendingUp className="w-6 h-6 text-cyan-400" />}
                onClick={() => setSelectedAlert('Volatility')}
              />
              <AlertTypeCard
                title="Price Alert"
                description="Set an alert when the price hits a certain level. Never miss an important price move."
                icon={<Bell className="w-6 h-6 text-cyan-400" />}
                onClick={() => setSelectedAlert('Price')}
              />
              <AlertTypeCard
                title="Range Alert"
                description="Set an alert when the price moves above or below a specific range. Get notified when prices fluctuate."
                icon={<ArrowRight className="w-6 h-6 text-cyan-400" />}
                onClick={() => setSelectedAlert('Range')}
              />
            </div>
          </div>
        </div>
      </div>

      {selectedAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-zinc-900 p-6 shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedAlert(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <AlertForm
              type={selectedAlert}
              onClose={() => setSelectedAlert(null)}
              onSubmit={handleFormSubmit}
            />
          </div>
        </div>
      )}

      {/* Show Telegram prompt after alert creation */}
      {showTelegramPrompt && (
        <div className="mt-4 bg-green-800/30 border border-green-500 text-green-300 p-4 rounded-lg text-sm">
          ✅ Alert set successfully! Now connect with our Telegram bot for real-time alerts. <br />
          👉{' '}
          <a
            href="https://t.me/Solanautics_Alerts_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold text-green-400"
          >
            Click here to start the bot
          </a>{' '}
          and press <strong>/start</strong> to activate alerts!
        </div>
      )}
    </section>
  );
};

export default SetAlertsPage;
