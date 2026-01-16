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
    <div className="min-h-screen bg-[#F8F9FA] pb-24 md:pb-28">
      {/* Premium Header - Gold Theme */}
      <div className="bg-[#B8860B] pb-16 pt-8 rounded-b-[2rem] relative overflow-hidden shadow-xl">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#DAA520] opacity-20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-white/90 transition-colors bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm font-medium">Back</span>
            </Link>
            <div className="text-right">
              <h1 className="text-2xl font-serif font-bold text-white drop-shadow-sm">LODHA GROUP</h1>
              <p className="text-white/90 text-xs tracking-widest uppercase">vip plans</p>
            </div>
          </div>
          
          <div className="text-center mt-6 pb-2">
             <h2 className="text-3xl font-medium text-white mb-2 drop-shadow-md">Investment <span className="text-white font-serif italic text-4xl">Opportunities</span></h2>
             <p className="text-white/90 text-sm max-w-xs mx-auto">Choose from our exclusive range of high-yield investment plans.</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-6 -mt-8 relative z-10 mb-10">
        <div className="bg-white p-2 rounded-2xl shadow-xl flex gap-3 border border-gray-100">
            <Link
              href="/"
              className="flex-1 py-3 px-4 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 transition-colors text-center"
            >
              Properties
            </Link>
            <button
              onClick={() => setActiveTab('vip')}
              className="flex-1 py-3 px-4 bg-[#B8860B] text-white font-bold rounded-xl text-sm shadow-md ring-2 ring-[#B8860B]/20"
            >
              VIP Plans
            </button>
        </div>
      </div>

      {/* Plans Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vipPlans.map((plan) => (
            <div key={plan.id} className="group bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 relative">
               {/* Image Section */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                
                <div className="absolute top-4 right-4">
                  <span className="bg-[#D4AF37] text-[#1A1A1A] px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Limit: {plan.limit}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                   <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                   <div className="h-1 w-12 bg-[#D4AF37] rounded-full"></div>
                </div>
              </div>

               {/* Details */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                   <div className="bg-gray-50 rounded-2xl p-3 text-center group-hover:bg-[#1A1A1A]/5 transition-colors">
                      <div className="text-[#D4AF37] text-lg font-bold">{formatPrice(plan.price)}</div>
                      <div className="text-[10px] text-gray-400 uppercase font-medium">Entry Price</div>
                   </div>
                   <div className="bg-gray-50 rounded-2xl p-3 text-center group-hover:bg-[#1A1A1A]/5 transition-colors">
                      <div className="text-[#1A1A1A] text-lg font-bold">{plan.days} Days</div>
                      <div className="text-[10px] text-gray-400 uppercase font-medium">Duration</div>
                   </div>
                   <div className="bg-gray-50 rounded-2xl p-3 text-center group-hover:bg-[#1A1A1A]/5 transition-colors">
                      <div className="text-[#1A1A1A] text-lg font-bold">{formatPrice(plan.daily)}</div>
                      <div className="text-[10px] text-gray-400 uppercase font-medium">Daily Income</div>
                   </div>
                   <div className="bg-gray-50 rounded-2xl p-3 text-center group-hover:bg-[#1A1A1A]/5 transition-colors">
                      <div className="text-[#D4AF37] text-lg font-bold">{formatPrice(plan.total)}</div>
                      <div className="text-[10px] text-gray-400 uppercase font-medium">Total Return</div>
                   </div>
                </div>
                
                {/* Invest Badge */}
                <div className="w-full bg-[#1A1A1A] text-white py-4 px-4 rounded-2xl font-bold shadow-lg text-center cursor-default group-hover:scale-[1.02] transition-transform flex justify-center items-center gap-2">
                   <span className="uppercase tracking-wider text-xs text-[#D4AF37]">Invest Now</span>
                   <span className="text-white/20">|</span>
                   <span>{formatPrice(plan.price)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
