'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [bankDetails, setBankDetails] = useState<any>(null);
  const [balance] = useState(0);
  const [recharge] = useState(0);
  const [totalIncome] = useState(0);

  useEffect(() => {
    // Load bank details
    const savedBankDetails = localStorage.getItem('bankDetails');
    if (savedBankDetails) {
      setBankDetails(JSON.parse(savedBankDetails));
    }
  }, []);

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const menuItems = [
    { icon: '👤', label: 'Personal information', href: '/profile/info' },
    { icon: '📋', label: 'My Orders', href: '/profile/orders' },
    { icon: '⚙️', label: 'Income Records', href: '/profile/income' },
    { icon: '👥', label: 'Withdraw Records', href: '/profile/withdrawals' },
    { icon: 'ℹ️', label: 'About us', href: '/about' },
    { icon: '⬇️', label: 'Download', href: '#' },
    { icon: '🚪', label: 'Log out', href: '/', action: 'logout' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-24">
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#8B6914] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">L</span>
            </div>
            <div>
              <p className="text-sm font-medium">ID: 730xxxx706</p>
              <p className="text-xs opacity-90">VIP1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Information Blocks */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37] mb-1">{formatPrice(balance)}</div>
              <div className="text-xs text-gray-600">Balance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37] mb-1">{formatPrice(recharge)}</div>
              <div className="text-xs text-gray-600">Recharge</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37] mb-1">{formatPrice(totalIncome)}</div>
              <div className="text-xs text-gray-600">Total income</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bank Account Display (if exists) */}
      {bankDetails && (
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-lg p-4 text-white">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-sm opacity-90">Account Holder</div>
                  <div className="text-lg font-bold">{bankDetails.holderName}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-90">Account Number</div>
                  <div className="text-lg font-bold">{bankDetails.accountNumber}</div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div className="bg-white/20 px-3 py-1 rounded-lg text-sm font-semibold">
                    {bankDetails.accountType}
                  </div>
                  <Link href="/my-bank" className="text-sm underline">Edit Bank</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Menu List */}
      <div className="bg-white mt-2">
        <div className="container mx-auto px-4">
          <div className="divide-y divide-gray-200">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center justify-between py-4 px-2 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-800 font-medium">{item.label}</span>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
