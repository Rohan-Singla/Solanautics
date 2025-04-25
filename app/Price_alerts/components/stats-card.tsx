// components/Price_alerts/stats-card.tsx

import { ReactNode } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value?: string;
  change?: string;
  changeType?: "positive" | "negative";
  subValue?: string;
  gradientFrom: string;
  gradientTo: string;
  children?: ReactNode;
}

export function StatCard_price_alert({
  title,
  value,
  change,
  changeType,
  subValue,
  gradientFrom,
  gradientTo,
  children,
}: StatCardProps) {
  return (
    <Card className="overflow-hidden border-gray-800 bg-gray-900/50 shadow-lg">
      <div className={`h-1.5 w-full bg-gradient-to-r ${gradientFrom} ${gradientTo}`} />
      <CardContent className="p-4">
        <h3 className="mb-1 text-sm font-medium text-gray-400">{title}</h3>
        {children ? (
          children
        ) : (
          <div className="flex items-end justify-between">
            <div>
              <p className="text-2xl font-bold text-white">{value}</p>
              {subValue && <p className="mt-1 text-xs text-gray-400">{subValue}</p>}
            </div>
            {change && (
              <div
                className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                  changeType === "positive"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {changeType === "positive" ? (
                  <ArrowUp className="h-3 w-3" />
                ) : (
                  <ArrowDown className="h-3 w-3" />
                )}
                {change}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
