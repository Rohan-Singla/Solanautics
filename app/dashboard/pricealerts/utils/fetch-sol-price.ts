const SOLSCAN_API_URL = "https://pro-api.solscan.io/v2.0/token/price";
const SOL_TOKEN_ADDRESS = "So11111111111111111111111111111111111111112";

export async function fetchSolPrice(): Promise<{
  currentPrice: number;
  change: string;
  changeType: "positive" | "negative";
  chartData: number[];
  lastUpdated: string;
} | null> {
  try {
    const response = await fetch(`${SOLSCAN_API_URL}?address=${SOL_TOKEN_ADDRESS}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        token: process.env.SOLSCAN_API_KEY as string,
      },
    });

    if (!response.ok) {
      console.error("Failed to fetch SOL price:", response.statusText);
      return null;
    }

    const data = await response.json();
    console.log('Fetched data from Solscan API:', data);  // Log the full API response

    const prices: number[] = data?.data?.map((d: any) => Number(d?.price)).filter((n: number) => !isNaN(n)) || [];

    const latestPrice = prices[prices.length - 1];
    const previousPrice = prices[prices.length - 2];

    if (isNaN(latestPrice)) {
      console.error("Latest price is invalid.");
      return null;
    }

    const priceChange = previousPrice
      ? ((latestPrice - previousPrice) / previousPrice) * 100
      : 0;

    console.log("Calculated price change:", priceChange);

    return {
      currentPrice: latestPrice,
      change: `${priceChange.toFixed(2)}%`,
      changeType: priceChange >= 0 ? "positive" : "negative",
      chartData: prices,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error fetching SOL price:", error);
    return null;
  }
}
