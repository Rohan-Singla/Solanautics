'use client';

import React, { useState } from 'react';

interface AlertFormProps {
  type: 'Price' | 'Volatility' | 'Range';
  onClose: () => void;
  onSubmit: (data: PriceAlertData | VolatilityAlertData | RangeAlertData) => void;
}

const SOL_TOKEN_ADDRESS = 'So11111111111111111111111111111111111111112';

type PriceAlertData = {
  type: 'Price';
  threshold: number;
};

type VolatilityAlertData = {
  type: 'Volatility';
  mode: 'default';
  tokenAddress: string;
};

type RangeAlertData = {
  type: 'Range';
  minPrice: number;
  maxPrice: number;
};

const AlertForm: React.FC<AlertFormProps> = ({ type, onClose, onSubmit }) => {
  const [threshold, setThreshold] = useState('');
  const [rangeMin, setRangeMin] = useState('');
  const [rangeMax, setRangeMax] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (type === 'Range') {
        const min = parseFloat(rangeMin);
        const max = parseFloat(rangeMax);
        if (min >= max) {
          alert('Min price should be less than max price.');
          return;
        }
        onSubmit({
          type: 'Range',
          minPrice: min,
          maxPrice: max,
        });
      }

      if (type === 'Volatility') {
        onSubmit({
          type: 'Volatility',
          mode: 'default',
          tokenAddress: SOL_TOKEN_ADDRESS,
        });
      }

      if (type === 'Price') {
        const price = parseFloat(threshold);
        if (price <= 0) {
          alert('Price must be greater than 0.');
          return;
        }

        onSubmit({
          type: 'Price',
          threshold: price,
        });
      }

      onClose(); // Close form after submission
    } catch {
      alert('Something went wrong while setting alert.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-zinc-900 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-white">Set {type} Alert</h2>

      {type === 'Range' && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-white mb-1">Min Price</label>
            <input
              type="number"
              value={rangeMin}
              onChange={(e) => setRangeMin(e.target.value)}
              required
              min="0"
              step="0.01"
              className="w-full rounded p-2 bg-zinc-800 text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-white mb-1">Max Price</label>
            <input
              type="number"
              value={rangeMax}
              onChange={(e) => setRangeMax(e.target.value)}
              required
              min="0"
              step="0.01"
              className="w-full rounded p-2 bg-zinc-800 text-white"
            />
          </div>
        </div>
      )}

      {type === 'Volatility' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-white mb-1">Token</label>
            <input
              type="text"
              value="SOL"
              disabled
              className="w-full rounded p-2 bg-zinc-700 text-gray-400 cursor-not-allowed"
            />
          </div>
          <p className="text-sm text-gray-400 italic">
            Volatility will be auto-calculated every hour based on price swings.
          </p>
        </div>
      )}

      {type === 'Price' && (
        <div>
          <label className="block text-sm text-white mb-1">Price Threshold</label>
          <input
            type="number"
            value={threshold}
            onChange={(e) => setThreshold(e.target.value)}
            required
            min="0"
            step="0.01"
            className="w-full rounded p-2 bg-zinc-800 text-white"
          />
        </div>
      )}

      <div className="flex gap-2 justify-end pt-2">
        <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 text-white rounded">
          Set Alert
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-600 hover:bg-gray-700 px-4 py-2 text-white rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AlertForm;
