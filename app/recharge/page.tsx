'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RechargePage() {
  const [activeTab, setActiveTab] = useState<'recharge' | 'withdrawal'>('recharge');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedChannel, setSelectedChannel] = useState<'A' | 'B'>('A');
  const [balance] = useState(0);

  const quickAmounts = [2000, 875, 295, 625, 1000, 1200, 1500, 2200, 3300];

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#8B6914] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link href="/" className="mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <h1 className="text-xl md:text-2xl font-bold flex-1 text-center">Recharge</h1>
            <div className="w-6"></div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('recharge')}
              className={`flex-1 py-3 px-4 font-semibold rounded-t-lg text-sm transition-colors ${
                activeTab === 'recharge'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Recharge
            </button>
            <Link
              href="/withdrawal"
              className={`flex-1 py-3 px-4 font-semibold rounded-t-lg text-sm transition-colors ${
                activeTab === 'withdrawal'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Withdrawal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Quick Amount Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-[#D4AF37] mb-3">Quick Amount</h2>
          <div className="grid grid-cols-3 gap-3">
            {quickAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount(amount.toString());
                }}
                className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                  selectedAmount === amount
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white shadow-lg'
                    : 'bg-white border-2 border-gray-200 text-[#D4AF37] hover:border-[#D4AF37]'
                }`}
              >
                {formatPrice(amount)}
              </button>
            ))}
          </div>
        </div>

        {/* Enter Amount Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-[#D4AF37] mb-3">Enter Amount</h2>
          <div className="mb-2">
            <span className="text-gray-600">Balance </span>
            <span className="text-[#D4AF37] font-semibold">{formatPrice(balance)}</span>
          </div>
          <input
            type="number"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
            placeholder="Recharge Amount"
            className="w-full py-4 px-4 bg-gray-100 border-2 border-gray-200 rounded-lg text-lg focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        {/* Online Channel Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-[#D4AF37] mb-3">Online Channel</h2>
          <div className="space-y-3">
            <button
              onClick={() => setSelectedChannel('A')}
              className={`w-full py-4 px-4 rounded-lg flex items-center justify-between transition-all ${
                selectedChannel === 'A'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white'
                  : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#D4AF37]'
              }`}
            >
              <span className="font-semibold">Channel A</span>
              <div className={`w-5 h-5 rounded-full border-2 ${
                selectedChannel === 'A' ? 'bg-white border-white' : 'border-gray-400'
              } flex items-center justify-center`}>
                {selectedChannel === 'A' && <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>}
              </div>
            </button>
            <button
              onClick={() => setSelectedChannel('B')}
              className={`w-full py-4 px-4 rounded-lg flex items-center justify-between transition-all ${
                selectedChannel === 'B'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white'
                  : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#D4AF37]'
              }`}
            >
              <span className="font-semibold">Channel B</span>
              <div className={`w-5 h-5 rounded-full border-2 ${
                selectedChannel === 'B' ? 'bg-white border-white' : 'border-gray-400'
              } flex items-center justify-center`}>
                {selectedChannel === 'B' && <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>}
              </div>
            </button>
          </div>
        </div>

        {/* Recharge Button */}
        <button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#8B6914] text-white py-4 px-6 rounded-lg font-bold text-lg shadow-lg transition-all mb-6">
          Recharge
        </button>

        {/* Recharge Introduction */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="text-lg font-bold text-[#D4AF37] mb-3">Recharge Introduction</h3>
          <ol className="space-y-2 text-gray-700 text-sm">
            <li>1. Minimum top-up amount is ₹295.</li>
            <li>2. Please pay and submit UTR within the given time.</li>
            <li>3. Do not use old details for topup.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
