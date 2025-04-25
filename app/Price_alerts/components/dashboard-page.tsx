'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SideNav_price_alert } from './side-nav';
import { useMobile } from '@/hooks/use-mobile';
import { LiveDataCard_price_alert } from './live-data';
import { FaBell } from 'react-icons/fa';
import AlertForm from './set-alerts/alert-form';

type AlertType = 'Price' | 'Volatility' | 'Range' | null;

export function DashboardPage_priceAlerts() {
  const isMobile = useMobile();
  const [activeTab, setActiveTab] = useState('leaderboard');
  const [selectedAlert, setSelectedAlert] = useState<AlertType>(null);

  const handleFormSubmit = async (data: any) => {
    const token = process.env.NEXT_PUBLIC_SOLSCAN_API_KEY;
    if (!token) {
      console.error('Solscan API token is missing');
      return;
    }

    const endpoint =
      selectedAlert === 'Volatility'
        ? '/api/price-alerts/set/volatility-alert'
        : selectedAlert === 'Price'
        ? '/api/price-alerts/set/price-alert'
        : '/api/price-alerts/set/range-alert';

    const payload = {
      ...data,
      userId: 'user123', // ✅ TEMP hardcoded user for now
        };

    try {
      console.log('🌐 Fetching from:', endpoint);
      console.log('📦 Payload:', data);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          token,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit alert: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('✅ API Response:', result);
      alert('✅ Alert set successfully!');
    } catch (error) {
      console.error('❌ Error submitting alert:', error);
      alert('❌ Failed to set alert.');
    }
  };

  const solPrice = '$158.34'; // Replace with live data if needed

  return (
    <div className="flex min-h-screen bg-black text-white">
      {!isMobile && (
        <SideNav_price_alert activeTab={activeTab} setActiveTab={setActiveTab} />
      )}

      <div className="flex-1">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-800 bg-gray-900/80 px-4 py-3 backdrop-blur-md">
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-64 border-gray-800 bg-gray-900 p-0"
              >
                <SideNav_price_alert activeTab={activeTab} setActiveTab={setActiveTab} />
              </SheetContent>
            </Sheet>
          )}
          <h1 className="text-xl font-bold text-white">Price Alerts Dashboard</h1>
        </header>

        <main className="px-4 py-6 md:px-6 space-y-6">
          <div className="flex items-center">
            <span className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              SOL Price: {solPrice}
            </span>
          </div>

          <div className="mt-4">
            <LiveDataCard_price_alert />
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 shadow-md">
            <h2 className="text-lg font-semibold text-white mb-4 text-center">
              Set Alerts – Don&apos;t wanna miss out on SOL swings?
            </h2>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                {['Volatility', 'Price', 'Range'].map((type) => (
                  <div key={type} className="text-center">
                    <p className="text-sm text-gray-400 mb-2">{type} Alert</p>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 flex items-center justify-center space-x-2"
                      onClick={() => setSelectedAlert(type as AlertType)}
                    >
                      <FaBell className="h-4 w-4" />
                      <span>{type === 'Range' ? 'Click Here' : 'Set Alert'}</span>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
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
    </div>
  );
}
