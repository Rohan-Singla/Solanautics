// @ts-ignore
import { Sparklines, SparklinesLine } from "react-sparklines";
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
  sentimentTag?: string;
  lastUpdated?: string;
  chartData?: number[];
}

export function StatCard_price_alert({
  title,
  value,
  change,
  changeType,
  subValue,
  gradientFrom,
  gradientTo,
  sentimentTag,
  lastUpdated,
  chartData = [],
}: StatCardProps) {
  return (
    <Card className="overflow-hidden border-gray-800 bg-gray-900/50 shadow-lg">
      <div className={`h-1.5 w-full bg-gradient-to-r ${gradientFrom} ${gradientTo}`} />
      <CardContent className="p-4 space-y-2">
        {/* Title */}
        <h3 className="text-sm font-medium text-gray-400">{title}</h3>

        {/* Value and Change */}
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

        {/* Mini Chart */}
        {chartData.length > 0 && (
          <div className="mt-2">
            <Sparklines data={chartData} width={100} height={20}>
              <SparklinesLine
                color={changeType === "positive" ? "green" : "red"}
                style={{ fill: "none", strokeWidth: 2 }}
              />
            </Sparklines>
          </div>
        )}

        {/* Tags and Last Updated */}
        {(sentimentTag || lastUpdated) && (
          <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
            {sentimentTag && (
              <span
                className={`px-2 py-0.5 rounded-full font-medium ${
                  sentimentTag === "Bullish"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {sentimentTag}
              </span>
            )}
            {lastUpdated && <span>Last updated: {lastUpdated}</span>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
