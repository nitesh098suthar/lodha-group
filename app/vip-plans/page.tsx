'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { vipPlans } from '../data/vipPlans';

export default function VIPPlansPage() {
  const [activeTab, setActiveTab] = useState<'properties' | 'vip'>('vip');

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-24">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#8B6914] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm">Back</span>
            </Link>
            <div className="text-right">
              <h1 className="text-2xl md:text-3xl font-bold">LODHA</h1>
              <p className="text-xs opacity-90">VIP Plans</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex gap-1">
            <Link
              href="/"
              className="flex-1 py-3 px-4 bg-gray-100 text-gray-600 font-semibold rounded-t-lg text-sm hover:bg-gray-200 transition-colors text-center"
            >
              Properties
            </Link>
            <button
              onClick={() => setActiveTab('vip')}
              className="flex-1 py-3 px-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white font-semibold rounded-t-lg text-sm"
            >
              VIP Plans
            </button>
          </div>
        </div>
      </div>

      {/* VIP Plans Listing */}
      <section className="container mx-auto px-4 py-4">
        <div className="space-y-4">
          {vipPlans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Plan Image */}
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                  Limit: {plan.limit}
                </div>
              </div>

              {/* Plan Title */}
              <div className="px-4 pt-4 pb-2">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  {plan.name}
                </h3>
              </div>

              {/* Info Boxes */}
              <div className="px-4 pb-4">
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-3 text-center shadow-sm">
                    <div className="text-base md:text-lg font-bold text-[#D4AF37] mb-1">{formatPrice(plan.price)}</div>
                    <div className="text-xs text-gray-600">Price</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-3 text-center shadow-sm">
                    <div className="text-base md:text-lg font-bold text-[#D4AF37] mb-1">{formatPrice(plan.daily)}</div>
                    <div className="text-xs text-gray-600">Daily</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-3 text-center shadow-sm">
                    <div className="text-base md:text-lg font-bold text-[#D4AF37] mb-1">{formatPrice(plan.total)}</div>
                    <div className="text-xs text-gray-600">Total</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-3 text-center shadow-sm">
                    <div className="text-base md:text-lg font-bold text-[#D4AF37] mb-1">{plan.days}</div>
                    <div className="text-xs text-gray-600">Days</div>
                  </div>
                </div>

                {/* Buy Now Button */}
                <button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#8B6914] text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg text-sm md:text-base">
                  Buy now ({formatPrice(plan.price)})
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
