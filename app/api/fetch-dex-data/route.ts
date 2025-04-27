// pages/api/fetch-dex-data.ts
import cron from 'node-cron';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  fetchPoolList,
  fetchPoolDetails,
  fetchPoolMetrics,
} from '../../../lib/apiService';
import { PoolInfo, PoolDetails, PoolMetrics } from '../../../types/dex';

// In-memory store (replace with database in production)
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

    const poolListResponse = await fetchPoolList(1, 10);
    console.log('Pool list response:', poolListResponse);
    const pools: PoolInfo[] = poolListResponse.data || [];

    const solanaDexProgramIds = [
      '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8', // Raydium
      '9W959DqEETiGZocYWCQPaJ6sBmU7GM993MykJSbiJsZ7', // Orca
      'Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1', // Saber
    ];

    const filteredPools = pools.filter((pool) =>
      solanaDexProgramIds.includes(pool.program_id)
    );
    console.log('Filtered pools:', filteredPools);

    const poolDetails: Record<string, PoolDetails> = {};
    const poolMetrics: Record<string, PoolMetrics> = {};

    await Promise.all(
      filteredPools.slice(0, 3).map(async (pool: PoolInfo) => {
        try {
          const [details, metrics] = await Promise.all([
            fetchPoolDetails(pool.pool_address),
            fetchPoolMetrics(pool.pool_address),
          ]);
          poolDetails[pool.pool_address] = details.data;
          poolMetrics[pool.pool_address] = metrics.data;
        } catch (error) {
          console.error(`Error fetching details for pool ${pool.pool_address}:`, error);
        }
      })
    );

    dexDataCache = {
      topPools: filteredPools,
      poolDetails,
      poolMetrics,
      lastUpdated: new Date().toISOString(),
    };

    console.log('Solana DEX data updated successfully');
  } catch (error) {
    console.error('Error fetching Solana DEX data:', error);
    throw error; // Re-throw to ensure the error is caught by the handler
  }
};

// Schedule cron job to run twice daily (00:00 and 12:00 UTC)
const startCronJob = () => {
  cron.schedule('0 0,12 * * *', async () => {
    console.log('Running cron job to fetch Solana DEX data at', new Date().toISOString());
    await fetchAllData();
  });
};

// Start cron job
startCronJob();

// API handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`Received ${req.method} request to /api/fetch-dex-data`);

  if (req.method === 'GET') {
    try {
      console.log('Handling GET request, returning cached data:', dexDataCache);
      res.status(200).json({
        success: true,
        data: dexDataCache,
      });
    } catch (error) {
      console.error('Error in GET handler:', error);
      res.status(500).json({ success: false, error: 'Failed to fetch Solana DEX data' });
    }
  } else if (req.method === 'POST') {
    try {
      console.log('Handling POST request, triggering data fetch');
      await fetchAllData();
      res.status(200).json({ success: true, data: dexDataCache });
    } catch (error) {
      console.error('Error in POST handler:', error);
      res.status(500).json({ success: false, error: 'Failed to fetch Solana DEX data' });
    }
  } else {
    console.log(`Method ${req.method} not allowed`);
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}