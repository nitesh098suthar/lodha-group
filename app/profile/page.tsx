'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();

  const [bankDetails, setBankDetails] = useState<any>(null);
  const [balance] = useState(0);
  const [recharge] = useState(0);
  const [totalIncome] = useState(0);

  useEffect(() => {
    const savedBankDetails = localStorage.getItem('bankDetails');
    if (savedBankDetails) {
      setBankDetails(JSON.parse(savedBankDetails));
    }
  }, []);

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  // 🔴 LOGOUT FUNCTION
  const handleLogout = async () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');

    if (!confirmLogout) return;

    try {
      const res = await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (res.ok) {
        // Clear client storage
        localStorage.clear();
        sessionStorage.clear();

        // Redirect to home / login
        router.push('/');
        router.refresh();
      } else {
        alert('Logout failed. Please try again.');
      }
    } catch (error) {
      console.error('Logout error:', error);
      alert('Something went wrong while logging out.');
    }
  };

  const menuItems = [
    { icon: '👤', label: 'Personal information', href: '/profile/info' },
    { icon: '📋', label: 'My Orders', href: '/profile/orders' },
    { icon: '⚙️', label: 'Income Records', href: '/profile/income' },
    { icon: '👥', label: 'Withdraw Records', href: '/profile/withdrawals' },
    { icon: 'ℹ️', label: 'About us', href: '/about' },
    { icon: '⬇️', label: 'Download', href: '#' },
    { icon: '🚪', label: 'Log out', action: 'logout' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-24">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#8B6914] text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
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

      {/* Stats */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-[#D4AF37]">
                {formatPrice(balance)}
              </div>
              <div className="text-xs text-gray-600">Balance</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#D4AF37]">
                {formatPrice(recharge)}
              </div>
              <div className="text-xs text-gray-600">Recharge</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#D4AF37]">
                {formatPrice(totalIncome)}
              </div>
              <div className="text-xs text-gray-600">Total income</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bank Details */}
      {bankDetails && (
        <div className="bg-white border-b py-4">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-lg p-4 text-white">
              <div className="flex justify-between mb-2">
                <div>
                  <div className="text-sm opacity-90">Account Holder</div>
                  <div className="font-bold">{bankDetails.holderName}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-90">Account Number</div>
                  <div className="font-bold">{bankDetails.accountNumber}</div>
                </div>
              </div>
              <div className="pt-3 border-t border-white/20 flex justify-between">
                <span className="bg-white/20 px-3 py-1 rounded text-sm">
                  {bankDetails.accountType}
                </span>
                <Link href="/my-bank" className="underline text-sm">
                  Edit Bank
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Menu */}
      <div className="bg-white mt-2">
        <div className="container mx-auto px-4 divide-y">
          {menuItems.map((item, index) => {
            if (item.action === 'logout') {
              return (
                <button
                  key={index}
                  onClick={handleLogout}
                  className="w-full flex items-center justify-between py-4 px-2 hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-red-600 font-medium">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-gray-400">›</span>
                </button>
              );
            }

            return (
              <Link
                key={index}
                href={item.href}
                className="flex items-center justify-between py-4 px-2 hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
                <span className="text-gray-400">›</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
