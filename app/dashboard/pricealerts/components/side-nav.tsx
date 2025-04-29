'use client';

import React from "react";

interface SideNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const SideNav_price_alert: React.FC<SideNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { label: "Overview", value: "overview" },
    { label: "Live Chart", value: "live-chart" },
    { label: "Transactions", value: "transactions" },
    { label: "24h SOL Volume", value: "sol-volume" },
    { label: "FAQ", value: "faq" },
  ];

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6 text-white">
      <h2 className="text-2xl font-bold mb-8">Price Alerts</h2>
      <nav className="space-y-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`w-full text-left p-2 rounded-lg ${
              activeTab === tab.value ? "bg-gray-800" : ""
            }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};
