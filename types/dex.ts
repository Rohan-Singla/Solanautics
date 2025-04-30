// types/dex.ts
export interface PoolInfo {
  volume_24h: number;
  pool_address: string;
  program_id: string;
  token1?: string;
  token1_account?: string;
  token2?: string;
  token2_account?: string;
  total_volume_24h?: number;
  total_trade_24h?: number;
  created_time?: number;
}

export interface PoolDetails {
  pool_address: string;
  program_id: string;
  tokens_info: {
    token: string;
    token_account: string;
    amount: number;
  }[];
  create_tx_hash: string;
  create_block_time: number;
  creator: string;
  lp_token: string;
}

export interface PoolMetrics {
  pool_address: string;
  program_id: string;
  total_volume_24h: number;
  total_volume_change_24h: number;
  total_trades_24h: number;
  total_trades_change_24h: number;
  days: {
    day: number;
    value: number;
  }[];
}

export interface DexData {
  topPools: PoolInfo[];
  poolDetails: Record<string, PoolDetails>;
  poolMetrics: Record<string, PoolMetrics[]>;
  lastUpdated: string;
}