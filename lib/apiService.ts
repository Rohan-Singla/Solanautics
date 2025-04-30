const API_KEY = process.env.SOLSCAN_API_KEY;
const BASE_URL = 'https://pro-api.solscan.io/v2.0/market';

async function fetchWithAuth(endpoint: string, params: Record<string, any> = {}) {
  console.log('Fetching data from Solscan API...');
  const url = new URL(`${BASE_URL}${endpoint}`);
  console.log('URL:', url.toString());
  console.log('Params:', params);

  // Handle array parameters like time[]
  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => {
        url.searchParams.append(`${key}[]`, v.toString());
      });
    } else {
      url.searchParams.append(key, value.toString());
    }
  });

  const response = await fetch(url.toString(), {
    headers: {
      Accept: 'application/json',
      token: API_KEY,
    } as HeadersInit,
  });

  // Uncomment if you want to throw error on non-OK responses
  // if (!response.ok) {
  //   throw new Error(`API request failed: ${response.status}`);
  // }

  return response.json();
}

export async function fetchPoolList(page = 1, pageSize = 100) {
  console.log('Fetching pool list...');
  return fetchWithAuth('/list', {
    page: page.toString(),
    page_size: pageSize.toString(),
    sort_by: 'volumes_24h',
    sort_order: 'desc',
  });
}

export async function fetchPoolDetails(poolAddress: string) {
  console.log('Fetching pool details...');
  return fetchWithAuth('/info', {
    address: poolAddress,
  });
}

export async function fetchPoolMetrics(poolAddress: string) {
  console.log('Fetching pool metrics...');
  return fetchWithAuth('/volume', {
    address: poolAddress,
    time: ['20250301', '20250310'], // this will be sent as time[]=...&time[]=...
  });
}