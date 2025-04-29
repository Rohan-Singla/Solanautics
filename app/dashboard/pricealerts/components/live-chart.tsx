"use client";

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  TooltipItem,
  ChartOptions,
} from "chart.js";

// Register chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LiveChart = () => {
  const [dataPoints, setDataPoints] = useState<number[]>([]);
  const [price, setPrice] = useState<number | null>(null);
  const [volume, setVolume] = useState<number | null>(null);

  // Fetch price and volume
  useEffect(() => {
    const fetchSOLPrice = async () => {
      try {
        const priceRes = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
        );
        const priceData = await priceRes.json();
        const solPrice = priceData.solana.usd;
        setPrice(solPrice);

        const volumeRes = await fetch(
          "https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=1"
        );
        const volumeData = await volumeRes.json();
        setVolume(
          volumeData.total_volumes[
            volumeData.total_volumes.length - 1
          ][1]
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSOLPrice();
    const priceInterval = setInterval(fetchSOLPrice, 30000);
    return () => clearInterval(priceInterval);
  }, []);

  // Simulate heartbeat pattern updates every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (price) {
        setDataPoints((prev) => [
          ...prev.slice(-19),
          price + Math.sin(Date.now() / 300) * 0.5, // Heartbeat-like wave
        ]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [price]);

  const data: ChartData<"line"> = {
    labels: Array(dataPoints.length).fill(""),
    datasets: [
      {
        label: "SOL Price (USD)",
        data: dataPoints,
        borderColor: "rgba(34, 193, 195, 1)",
        backgroundColor: "rgba(34, 193, 195, 0.2)",
        tension: 0.5,
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<"line">) => {
            const value = tooltipItem.raw as number;
            return `$${value.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
        type: "category",
      },
      y: {
        type: "linear",
        beginAtZero: false,
        ticks: {
          callback: (tickValue: string | number) => {
            return typeof tickValue === "number"
              ? `$${tickValue.toFixed(2)}`
              : tickValue;
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-[300px] md:h-[400px] p-4 rounded-lg shadow-md bg-white">
      <Line data={data} options={options} />
    </div>
  );
};

export default LiveChart;
