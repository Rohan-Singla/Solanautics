"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Circle,
} from "lucide-react";

export const LiveDataCard_price_alert = () => {
  const data = [
    {
      icon: <DollarSign className="h-4 w-4 text-green-500" />,
      label: "Volume",
      value: "$42.8M",
    },
    {
      icon: <Circle className="h-4 w-4 text-blue-500" />,
      label: "Market Cap",
      value: "$6.5B",
    },
    {
      icon: <TrendingUp className="h-4 w-4 text-yellow-400" />,
      label: "Volatility",
      value: "3.2%",
    },
    {
      icon: <Circle className="h-4 w-4 text-purple-400" />,
      label: "Total Supply",
      value: "563M SOL",
    },
    {
      icon: <TrendingDown className="h-4 w-4 text-red-500" />,
      label: "24h High / Low",
      value: "$162.00 / $152.20",
    },
  ];

  return (
    <Card className="overflow-hidden border-gray-800 bg-gray-900/50 shadow-lg p-6">
      {/* Top gradient bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 to-pink-600 mb-4 rounded" />

      {/* Heading */}
      <h3 className="text-base font-semibold text-white mb-4">Live Data</h3>

      {/* Data rows */}
      <div className="space-y-4 text-sm text-white">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-gray-400">
              {item.icon}
              {item.label}
            </span>
            <span className="font-medium text-white">{item.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
