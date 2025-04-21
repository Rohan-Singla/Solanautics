"use client";

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  TooltipItem,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const LiveChart = () => {
  const [dataPoints, setDataPoints] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints((prev) => {
        const last = prev[prev.length - 1] || 30;
        const newPoint = parseFloat(
          (last + (Math.random() * 2 - 1)).toFixed(2)
        ); // slight up/down
        return [...prev.slice(-19), newPoint];
      });
    }, 500); // every 0.5 sec

    return () => clearInterval(interval);
  }, []);

  const data: ChartData<"line"> = {
    labels: Array(dataPoints.length).fill(""),
    datasets: [
      {
        label: "Simulated Price",
        data: dataPoints,
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.1)",
        fill: true,
        tension: 0.6,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<"line">) => {
            const value = tooltipItem.raw as number;
            return `$${value.toFixed(2)}`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: true,
        ticks: {
          callback: (tickValue: string | number) =>
            typeof tickValue === "number" ? `$${tickValue}` : tickValue,
        },
      },
    },
  };

  return (
    <div className="w-full h-72 md:h-96 rounded-xl bg-black p-4">
      <Line data={data} options={options} />
    </div>
  );
};

export default LiveChart;
