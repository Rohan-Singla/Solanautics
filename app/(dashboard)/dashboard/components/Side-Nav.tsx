import { BarChart3, Bell, BookmarkIcon, Settings } from 'lucide-react';
import Link from "next/link";

interface SideNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function SideNav({ activeTab, setActiveTab }: SideNavProps) {
  const navItems = [
    { id: "leaderboard", label: "Leaderboard", icon: BarChart3 },
    { id: "alerts", label: "Alerts", icon: Bell },
    { id: "followed", label: "Followed Wallets", icon: BookmarkIcon },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen w-64 flex-col border-r border-gray-800 bg-gray-900">
      <div className="flex items-center gap-2 border-b border-gray-800 p-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
          <span className="text-sm font-bold text-white">SW</span>
        </div>
        <h1 className="text-lg font-bold text-white">Solana Whale Tracker</h1>
      </div>
      
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href="#"
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              activeTab === item.id
                ? "bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <item.icon className={`h-5 w-5 ${activeTab === item.id ? "text-purple-400" : ""}`} />
            {item.label}
          </Link>
        ))}
      </nav>
      
      <div className="border-t border-gray-800 p-4">
        <div className="rounded-lg bg-gray-800/50 p-3">
          <h3 className="mb-2 text-sm font-medium text-white">Pro Tip</h3>
          <p className="text-xs text-gray-400">Set up alerts to get notified when whales make significant moves.</p>
        </div>
      </div>
    </div>
  );
}
