"use client";

import React from "react";
import {
  LayoutDashboard,
  LineChart,
  ArrowRightLeft,
  TrendingUp,
  HelpCircle,
} from "lucide-react";

interface SideNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const SideNav_price_alert: React.FC<SideNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    { label: "Overview", value: "overview", icon: LayoutDashboard },
    { label: "Live Chart", value: "live-chart", icon: LineChart },
    { label: "Transactions", value: "transactions", icon: ArrowRightLeft },
    { label: "24h SOL Volume", value: "sol-volume", icon: TrendingUp },
    { label: "FAQ", value: "faq", icon: HelpCircle },
  ];

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6 text-white hidden md:block min-h-screen">
      <h2 className="text-2xl font-bold mb-8">Price Alerts</h2>
      <nav className="space-y-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex items-center w-full px-4 py-2 rounded-lg text-left transition-all ${
                activeTab === tab.value
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {tab.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
