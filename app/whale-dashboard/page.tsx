'use client'
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, ChevronUp, RefreshCw, 
 Filter, ExternalLink, Search
} from 'lucide-react';

// Types
interface WhaleWallet {
  id: string;
  address: string;
  nickname: string | null;
  balance: number;
  value: number;
  change24h: number;
  lastActivity: string;
  tags: string[];
  watchlisted: boolean;
}

interface TokenHolding {
  token: string;
  symbol: string;
  amount: number;
  value: number;
  percentage: number;
}

const WhaleWalletDashboard: React.FC = () => {
  const [wallets, setWallets] = useState<WhaleWallet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<string>('value');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [tokenHoldings, setTokenHoldings] = useState<TokenHolding[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterByTag, setFilterByTag] = useState<string | null>(null);

  // Mock data for initial UI development
  useEffect(() => {
    // In a real implementation, this would be fetched from Solscan's API
    const mockWallets: WhaleWallet[] = [
      {
        id: '1',
        address: 'FZLEruPGTiqBKBmyXzMQUc4SiSJHPDp9Vye8BWmK1K8h',
        nickname: 'Alameda Research',
        balance: 5672450.89,
        value: 2815893425.76,
        change24h: -2.35,
        lastActivity: '2025-04-11T14:23:45Z',
        tags: ['Institution', 'VC'],
        watchlisted: true
      },
      {
        id: '2',
        address: 'DE5ViRnKsTQQj5YXMKUVvrTV6WM4hgDbJRzadN6JtVK',
        nickname: 'Binance Hot Wallet',
        balance: 12450982.34,
        value: 6182937451.23,
        change24h: 1.25,
        lastActivity: '2025-04-12T09:15:32Z',
        tags: ['Exchange', 'CEX'],
        watchlisted: true
      },
      {
        id: '3',
        address: 'ACsHUMWNNWNa46fGMWz8vfuPKFxfTLSeHceFj3K7HPz',
        nickname: null,
        balance: 1892345.67,
        value: 939582673.45,
        change24h: 5.67,
        lastActivity: '2025-04-10T22:45:11Z',
        tags: ['Unknown', 'Whale'],
        watchlisted: false
      },
      {
        id: '4',
        address: 'JCwRtoH4jZJLDjgxdnKTdJXdRLNuWwWMVKiVqW8q7FZm',
        nickname: 'Jump Crypto',
        balance: 3459821.12,
        value: 1717923451.34,
        change24h: -0.75,
        lastActivity: '2025-04-12T07:31:23Z',
        tags: ['Market Maker', 'Institution'],
        watchlisted: true
      },
      {
        id: '5',
        address: 'BXEZkPdRqraWwqpQrAJHW8KnDKsVcCMFdnge6ZYyXVy',
        nickname: 'Solana Foundation',
        balance: 8762134.90,
        value: 4351847203.56,
        change24h: 0.32,
        lastActivity: '2025-04-11T19:22:45Z',
        tags: ['Foundation', 'Treasury'],
        watchlisted: true
      },
    ];

    const mockTokens: TokenHolding[] = [
      { token: 'Solana', symbol: 'SOL', amount: 2134567.89, value: 1059345627.45, percentage: 37.62 },
      { token: 'USDC', symbol: 'USDC', amount: 745621938.45, value: 745621938.45, percentage: 26.48 },
      { token: 'Marinade staked SOL', symbol: 'mSOL', amount: 634521.78, value: 319834521.67, percentage: 11.36 },
      { token: 'Raydium', symbol: 'RAY', amount: 12456789.23, value: 248756932.41, percentage: 8.83 },
      { token: 'Jupiter', symbol: 'JUP', amount: 34568923.12, value: 186729043.52, percentage: 6.63 },
      { token: 'Orca', symbol: 'ORCA', amount: 9876543.21, value: 158963212.34, percentage: 5.65 },
      { token: 'Other Tokens', symbol: 'VARIOUS', amount: 0, value: 96642150.92, percentage: 3.43 },
    ];

    setWallets(mockWallets);
    setTokenHoldings(mockTokens);
    setLoading(false);
  }, []);

  // Sort wallets
  const sortedWallets = [...wallets].sort((a, b) => {
    const aValue = a[sortBy as keyof WhaleWallet];
    const bValue = b[sortBy as keyof WhaleWallet];
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue) 
        : bValue.localeCompare(aValue);
    }
    
    return 0;
  });

  // Filter wallets by search query and tags
  const filteredWallets = sortedWallets.filter(wallet => {
    const matchesSearch = searchQuery === '' || 
      wallet.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (wallet.nickname && wallet.nickname.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesTag = filterByTag === null || wallet.tags.includes(filterByTag);
    
    return matchesSearch && matchesTag;
  });

  // Get all available tags from wallets
  const allTags = Array.from(new Set(wallets.flatMap(wallet => wallet.tags)));

  // Handle sort toggle
  const handleSortClick = (column: string) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('desc');
    }
  };

  const handleWalletClick = (id: string) => {
    setSelectedWallet(selectedWallet === id ? null : id);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">
        {/* Dashboard Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Whale Wallet Dashboard</h2>
          <p className="text-gray-600">
            Monitor and track the largest wallets on Solana blockchain with real-time data
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-gray-500 mb-2">Total Wallets Tracked</div>
            <div className="text-3xl font-bold text-gray-800">
              {formatNumber(wallets.length)}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-gray-500 mb-2">Total Value</div>
            <div className="text-3xl font-bold text-gray-800">
              {formatCurrency(wallets.reduce((sum, wallet) => sum + wallet.value, 0))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-gray-500 mb-2">Average Wallet Value</div>
            <div className="text-3xl font-bold text-gray-800">
              {formatCurrency(wallets.reduce((sum, wallet) => sum + wallet.value, 0) / Math.max(1, wallets.length))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-gray-500 mb-2">Active in Last 24h</div>
            <div className="text-3xl font-bold text-gray-800">
              {wallets.filter(w => new Date(w.lastActivity) > new Date(Date.now() - 24 * 60 * 60 * 1000)).length}
            </div>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white 
                          placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 
                          focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by address or nickname"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex">
            <div className="relative inline-block text-left">
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 
                          rounded-md leading-6 focus:outline-none focus:ring-blue-500 
                          focus:border-blue-500 cursor-pointer bg-white"
                value={filterByTag || ''}
                onChange={(e) => setFilterByTag(e.target.value === '' ? null : e.target.value)}
              >
                <option value="">All Tags</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <Filter size={18} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Wallets Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
          {loading ? (
            <div className="p-8 text-center">
              <RefreshCw size={32} className="animate-spin mx-auto mb-4 text-blue-500" />
              <p className="text-gray-600">Loading wallet data...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button 
                        className="flex items-center focus:outline-none" 
                        onClick={() => handleSortClick('nickname')}
                      >
                        Wallet
                        {sortBy === 'nickname' && (
                          sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                        )}
                      </button>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button 
                        className="flex items-center focus:outline-none" 
                        onClick={() => handleSortClick('balance')}
                      >
                        SOL Balance
                        {sortBy === 'balance' && (
                          sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                        )}
                      </button>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button 
                        className="flex items-center focus:outline-none" 
                        onClick={() => handleSortClick('value')}
                      >
                        Value (USD)
                        {sortBy === 'value' && (
                          sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                        )}
                      </button>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button 
                        className="flex items-center focus:outline-none" 
                        onClick={() => handleSortClick('change24h')}
                      >
                        24h Change
                        {sortBy === 'change24h' && (
                          sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                        )}
                      </button>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button 
                        className="flex items-center focus:outline-none" 
                        onClick={() => handleSortClick('lastActivity')}
                      >
                        Last Activity
                        {sortBy === 'lastActivity' && (
                          sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                        )}
                      </button>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tags
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredWallets.map((wallet) => (
                    <React.Fragment key={wallet.id}>
                      <tr 
                        className={`hover:bg-gray-50 cursor-pointer ${selectedWallet === wallet.id ? 'bg-blue-50' : ''}`}
                        onClick={() => handleWalletClick(wallet.id)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-1">
                              <div className="text-sm font-medium text-gray-900">
                                {wallet.nickname || 'Unknown Whale'}
                              </div>
                              <div className="text-xs text-gray-500">
                                {wallet.address.substring(0, 6)}...{wallet.address.substring(wallet.address.length - 4)}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{formatNumber(wallet.balance)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{formatCurrency(wallet.value)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            wallet.change24h > 0 
                              ? 'bg-green-100 text-green-800' 
                              : wallet.change24h < 0 
                                ? 'bg-red-100 text-red-800' 
                                : 'bg-gray-100 text-gray-800'
                          }`}>
                            {wallet.change24h > 0 ? '+' : ''}{wallet.change24h}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(wallet.lastActivity).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-wrap gap-1">
                            {wallet.tags.map(tag => (
                              <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                          <a 
                            href={`https://solscan.io/account/${wallet.address}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-900 mx-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={16} />
                          </a>
                        </td>
                      </tr>
                      {selectedWallet === wallet.id && (
                        <tr>
                          <td colSpan={7} className="px-6 py-4 bg-blue-50">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                              {/* Token Holdings */}
                              <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-3">
                                  Token Holdings
                                </h3>
                                <div className="bg-white rounded-lg shadow overflow-hidden">
                                  <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                      <tr>
                                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                          Token
                                        </th>
                                        <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                          Amount
                                        </th>
                                        <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                          Value (USD)
                                        </th>
                                        <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                          % of Portfolio
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                      {tokenHoldings.map((token) => (
                                        <tr key={token.symbol} className="hover:bg-gray-50">
                                          <td className="px-4 py-3 whitespace-nowrap">
                                            <div className="flex items-center">
                                              <div className="ml-1">
                                                <div className="text-sm font-medium text-gray-900">
                                                  {token.symbol}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                  {token.token}
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 text-right">
                                            {formatNumber(token.amount)}
                                          </td>
                                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 text-right">
                                            {formatCurrency(token.value)}
                                          </td>
                                          <td className="px-4 py-3 whitespace-nowrap text-right">
                                            <div className="flex items-center justify-end">
                                              <span className="text-sm text-gray-900 mr-2">
                                                {token.percentage.toFixed(2)}%
                                              </span>
                                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                                <div 
                                                  className="bg-blue-600 h-2 rounded-full" 
                                                  style={{ width: `${token.percentage}%` }} 
                                                />
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>

                              {/* Recent Activity */}
                              <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-3">
                                  Recent Activity
                                </h3>
                                <div className="bg-white rounded-lg shadow p-4">
                                  <p className="text-sm text-gray-500 italic text-center py-8">
                                    Activity data will be fetched from Solscan API in the final implementation.
                                  </p>
                                </div>
                                
                                <h3 className="text-lg font-medium text-gray-900 mb-3 mt-6">
                                  Wallet Address
                                </h3>
                                <div className="bg-white rounded-lg shadow p-4">
                                  <div className="flex items-center justify-between">
                                    <code className="text-sm text-gray-800 bg-gray-100 px-2 py-1 rounded break-all">
                                      {wallet.address}
                                    </code>
                                    <button className="text-blue-600 hover:text-blue-800 ml-2">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default WhaleWalletDashboard;