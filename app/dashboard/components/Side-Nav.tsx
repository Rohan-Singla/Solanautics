import { DollarSign, GroupIcon, Wallet } from 'lucide-react';
import Link from "next/link";

interface SideNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function SideNav({ activeTab, setActiveTab }: SideNavProps) {
  const navItems = [
    { id: "walletracking", label: "Wallet Tracking", icon: Wallet,href:'/dashboard' },
    { id: "pricealerts", label: "Price Alerts", icon: DollarSign,href:'/dashboard/pricealerts'},
    { id: "liquiditypools", label: "Pools Tracking", icon: GroupIcon,href:'/dashboard/liquiditypools' },
  ];

  return (
    <div className="flex min-h-screen w-64 flex-col bg-gray-900 border-r border-gray-800 shadow-md">
      <div className="flex items-center gap-2 border-b border-gray-800 px-6 py-5">
        <Link href="/">
          <h1 className="text-xl font-semibold text-white tracking-wide">Solanautics</h1>
        </Link>
      </div>

      <nav className="flex-1 space-y-2 px-4 py-6">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-150 ${activeTab === item.id
                ? "bg-gradient-to-r from-purple-700/30 to-blue-600/30 text-white shadow-inner"
                : "text-gray-400 hover:text-white hover:bg-gray-800/60"
              }`}
          >
            <item.icon
              className={`h-5 w-5 transition-colors duration-150 ${activeTab === item.id ? "text-purple-400" : "text-gray-500"
                }`}
            />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto border-t border-gray-800 p-4">
        <div className="rounded-lg bg-gray-800/60 p-4">
          <h3 className="mb-1 text-sm font-semibold text-white">Pro Tip</h3>
          <p className="text-xs text-gray-400">
            Set up alerts to get notified when whales make significant moves.
          </p>
        </div>
      </div>
    </div>
  );
}
