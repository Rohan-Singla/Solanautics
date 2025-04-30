import { NextRequest } from 'next/server';
import cron from 'node-cron';
import {
  fetchPoolList,
  fetchPoolDetails,
  fetchPoolMetrics,
} from '../../../lib/apiService';
import { PoolInfo, PoolDetails, PoolMetrics } from '../../../types/dex';

// In-memory store
let dexDataCache: {
  topPools: PoolInfo[];
  poolDetails: Record<string, PoolDetails>;
  poolMetrics: Record<string, PoolMetrics>;
  lastUpdated: string | null;
} = {
  topPools: [],
  poolDetails: {},
  poolMetrics: {},
  lastUpdated: null,
};

// Fetch and update Solana DEX pool data
const fetchAllData = async () => {
  try {
    console.log('Fetching Solana DEX data...');

    const poolListResponse = await fetchPoolList(1, 100);
    console.log('Pool list response:', poolListResponse);
    let pools: PoolInfo[] = poolListResponse.data || [];

    // Sort pools by 24h volume in descending order and take the top 10
    pools.sort((a, b) => (b.volume_24h || 0) - (a.volume_24h || 0));
    const topPools = pools.slice(0, 10);

    const poolDetails: Record<string, PoolDetails> = {};
    const poolMetrics: Record<string, PoolMetrics> = {};

    await Promise.all(
      topPools.map(async (pool: PoolInfo) => {
        try {
          const [details, metrics] = await Promise.all([
            fetchPoolDetails(pool.pool_address),
            fetchPoolMetrics(pool.pool_address), // Ensure time is an array of timestamps in milliseconds
          ]);
          console.log(`Fetched details for pool ${pool.pool_address}:`, details);
          console.log(`Fetched metrics for pool ${pool.pool_address}:`, metrics);
          poolDetails[pool.pool_address] = details.data;
          poolMetrics[pool.pool_address] = metrics.data;
        } catch (error) {
          console.error(
            `Error fetching details for pool ${pool.pool_address}:`,
            error
          );
        }
      })
    );

    dexDataCache = {
      topPools: topPools,
      poolDetails,
      poolMetrics,
      lastUpdated: new Date().toISOString(),
    };

    console.log('Solana DEX data updated successfully');
  } catch (error) {
    console.error('Error fetching Solana DEX data:', error);
    throw error;
  }
};

// Start cron job
const startCronJob = () => {
  cron.schedule('0 0,12 * * *', async () => {
    console.log(
      'Running cron job to fetch Solana DEX data at',
      new Date().toISOString()
    );
    await fetchAllData();
  });
};
startCronJob();

// 👇 Named exports required
export async function GET(req: NextRequest) {
  try {
    console.log('Handling GET request, returning cached data:', dexDataCache);
    return Response.json({
      success: true,
      data: dexDataCache,
    });
  } catch (error) {
    console.error('Error in GET handler:', error);
    return new Response('Failed to fetch Solana DEX data', { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    console.log('Handling POST request, triggering data fetch');
    await fetchAllData();
    return Response.json({
      success: true,
      data: dexDataCache,
    });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return new Response('Failed to fetch Solana DEX data', { status: 500 });
  }
}