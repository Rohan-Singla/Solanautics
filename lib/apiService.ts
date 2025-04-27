// lib/apiService.ts
const API_KEY = process.env.SOLSCAN_API_KEY;
const BASE_URL = 'https://pro-api.solscan.io/v2.0/market';

async function fetchWithAuth(endpoint: string, params: Record<string, string> = {}) {
    console.log('Fetching data from Solscan API...');
  const url = new URL(`${BASE_URL}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const response = await fetch(url.toString(), {
    headers: {
      Accept: 'application/json',
      token: API_KEY,
    } as HeadersInit,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

export async function fetchPoolList(page = 1, pageSize = 10) {
    console.log('Fetching pool list...');
  return fetchWithAuth('/list', {
    page: page.toString(),
    page_size: pageSize.toString(),
  });
}

export async function fetchPoolDetails(poolAddress: string) {
    console.log('Fetching pool details...');
  return fetchWithAuth(`/pool/${poolAddress}`);
}

export async function fetchPoolMetrics(poolAddress: string) {
    console.log('Fetching pool metrics...');
  return fetchWithAuth(`/pool/${poolAddress}/metrics`);
}