"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { format } from "date-fns";
import { useMobile } from "@/hooks/use-mobile";

interface PoolMetricsChartProps {
  data: {
    date: string;
    value: number;
  }[];
  isDarkMode: boolean;
}

export function PoolMetricsChart({ data, isDarkMode }: PoolMetricsChartProps) {
  console.log("Data for chart:", data); // Log the data to check its structure
  const isMobile = useMobile();

  // Format date for X-axis (e.g., "Mar 1")
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMM d");
  };

  // Format value for Y-axis and tooltip (e.g., "$1.23M" or "1,234")
  const formatValue = (value: number, isTrades: boolean) => {
    if (isTrades) {
      return value.toLocaleString();
    }
    if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(2)}M`;
    }
    if (value >= 1_000) {
      return `$${(value / 1_000).toFixed(2)}K`;
    }
    return `$${value.toFixed(2)}`;
  };

  // Determine if the data represents trades or volume
  const isTrades = data.some((d) => d.value < 10000); // Heuristic: trades are usually smaller numbers

  return (
    <div className="h-64 sm:h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: isMobile ? 10 : 30,
            left: isMobile ? 0 : 20,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9333ea" stopOpacity={0.8} /> {/* purple-600 */}
              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.2} /> {/* indigo-600 */}
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={isDarkMode ? "#374151" : "#e5e7eb"} // gray-700 for dark, gray-200 for light
            opacity={0.3}
          />
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            stroke={isDarkMode ? "#e5e7eb" : "#374151"} // white for dark, gray-700 for light
            tick={{ fill: isDarkMode ? "#e5e7eb" : "#374151", fontSize: isMobile ? 10 : 12 }}
            interval={isMobile ? 2 : 1} // Show fewer ticks on mobile
          />
          <YAxis
            tickFormatter={(value) => formatValue(value, isTrades)}
            stroke={isDarkMode ? "#e5e7eb" : "#374151"}
            tick={{ fill: isDarkMode ? "#e5e7eb" : "#374151", fontSize: isMobile ? 10 : 12 }}
            width={isMobile ? 40 : 60}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDarkMode ? "#1f2937" : "#ffffff", // gray-800 for dark, white for light
              borderColor: isDarkMode ? "#374151" : "#e5e7eb", // gray-700 for dark, gray-200 for light
              color: isDarkMode ? "#ffffff" : "#1f2937",
              fontSize: 12,
              borderRadius: 8,
              padding: "8px",
            }}
            formatter={(value: number) => [formatValue(value, isTrades), isTrades ? "Trades" : "Volume"]}
            labelFormatter={(label) => formatDate(label)}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#9333ea" // purple-600
            strokeWidth={isMobile ? 2 : 3}
            fillOpacity={1}
            fill="url(#colorMetric)"
            activeDot={{ r: 6 }} // Larger dot for touch interaction
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}