'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function WithdrawalPage() {
  const [activeTab, setActiveTab] = useState<'recharge' | 'withdrawal'>('withdrawal');
  const [amount, setAmount] = useState('200');
  const [balance] = useState(0);
  const [bankDetails, setBankDetails] = useState<{
    holderName: string;
    accountNumber: string;
    ifscCode: string;
    accountType: string;
  } | null>(null);

  useEffect(() => {
    // Load bank details from localStorage
    const savedBankDetails = localStorage.getItem('bankDetails');
    if (savedBankDetails) {
      setBankDetails(JSON.parse(savedBankDetails));
    }
  }, []);

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const calculateReceive = (amt: number) => {
    // 10% platform fee
    return Math.round(amt * 0.9);
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
            <h1 className="text-xl md:text-2xl font-bold flex-1 text-center">Withdrawal</h1>
            <div className="w-6"></div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex gap-1">
            <Link
              href="/recharge"
              className={`flex-1 py-3 px-4 font-semibold rounded-t-lg text-sm transition-colors ${
                activeTab === 'recharge'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Recharge
            </Link>
            <button
              onClick={() => setActiveTab('withdrawal')}
              className={`flex-1 py-3 px-4 font-semibold rounded-t-lg text-sm transition-colors ${
                activeTab === 'withdrawal'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Withdrawal
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Balance */}
        <div className="mb-4">
          <span className="text-gray-800 font-semibold">Balance </span>
          <span className="text-[#D4AF37] font-bold text-lg">{formatPrice(balance)}</span>
        </div>

        {/* Enter Amount */}
        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-2">Enter Amount</label>
          <div className="flex items-center gap-4">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 py-3 px-4 bg-white border-2 border-gray-200 rounded-lg text-lg focus:outline-none focus:border-[#D4AF37]"
            />
            <div className="text-sm text-gray-600">
              You will receive: <span className="text-[#D4AF37] font-semibold">{formatPrice(calculateReceive(parseInt(amount) || 0))}</span>
            </div>
          </div>
        </div>

        {/* Bank Account Details */}
        {bankDetails ? (
          <div className="mb-6">
            <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-lg p-4 text-white mb-2">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-sm opacity-90">Account Holder</div>
                  <div className="text-xl font-bold">{bankDetails.holderName}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-90">Account Number</div>
                  <div className="text-lg font-bold">{bankDetails.accountNumber}</div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="bg-white/20 px-3 py-1 rounded-lg text-sm font-semibold">
                  {bankDetails.accountType}
                </div>
                <div className="flex gap-2">
                  <Link href="/my-bank" className="text-sm underline opacity-90">View Bank</Link>
                  <Link href="/my-bank" className="text-sm underline opacity-90">Edit Bank</Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-lg p-4 text-white text-center">
              <p className="mb-3">No bank account added</p>
              <Link href="/my-bank" className="bg-white text-[#D4AF37] px-4 py-2 rounded-lg font-semibold inline-block">
                Add Bank Account
              </Link>
            </div>
          </div>
        )}

        {/* Withdraw Button */}
        <button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#8B6914] text-white py-4 px-6 rounded-lg font-bold text-lg shadow-lg transition-all mb-6">
          Withdraw
        </button>

        {/* Withdrawal Information */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="text-lg font-bold text-[#D4AF37] mb-3">Withdrawal Information</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Minimum withdrawal: ₹190</li>
            <li>Withdraw time: 07:00 AM to 5:00 PM.</li>
            <li>Platform Fee: 10% Tax</li>
            <li>Typical processing time: 0 to 5 minutes after submission.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
