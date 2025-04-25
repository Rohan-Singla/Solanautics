"use client";

import React from "react";
import { Card } from "@/components/ui/card";

export const LiveDataCard_price_alert = () => {
  return (
    <Card className="overflow-hidden border-gray-800 bg-gray-900/50 shadow-lg p-4">
      <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 to-pink-600 mb-4"></div>
      <h3 className="text-sm font-medium text-gray-400 mb-2">Live Data</h3>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white">
        <div className="flex justify-between">
          <span className="text-gray-400">Volume</span>
          <span>$42.8M</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Market Cap</span>
          <span>$6.5B</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Volatility</span>
          <span>3.2%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Total Supply</span>
          <span>563M SOL</span>
        </div>
        <div className="flex justify-between col-span-2">
          <span className="text-gray-400">24h High / Low</span>
          <span>$162.00 / $152.20</span>
        </div>
      </div>
    </Card>
  );
};
