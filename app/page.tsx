import Link from "next/link";
import BuildingCarousel from "./components/BuildingCarousel";
import PropertyCard from "./components/PropertyCard";
import { properties } from "./data/properties";

export default function Home() {
  // Show first 8 properties
  const displayedProperties = properties.slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-24">
      {/* Top Banner - Mobile App Style */}
      <div className="bg-linear-to-r from-[#D4AF37] via-[#B8860B] to-[#8B6914] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">730xxxx706</p>
                <p className="text-xs opacity-90">VIP1</p>
              </div>
            </div>
            <div className="text-right">
              <h1 className="text-2xl md:text-3xl font-bold">LODHA</h1>
              <p className="text-xs opacity-90">Premium Real Estate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons Row */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="grid grid-cols-4 gap-2">
            <Link
              href="/recharge"
              className="flex flex-col items-center justify-center py-3 px-2 bg-linear-to-br from-[#D4AF37] to-[#B8860B] text-white rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <svg
                className="w-6 h-6 mb-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span className="text-xs font-medium">Recharge</span>
            </Link>
            <Link
              href="/withdrawal"
              className="flex flex-col items-center justify-center py-3 px-2 bg-linear-to-br from-[#D4AF37] to-[#B8860B] text-white rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <svg
                className="w-6 h-6 mb-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-xs font-medium">Withdraw</span>
            </Link>
            <button className="flex flex-col items-center justify-center py-3 px-2 bg-linear-to-br from-[#D4AF37] to-[#B8860B] text-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <svg
                className="w-6 h-6 mb-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="text-xs font-medium">Channel</span>
            </button>
            <button className="flex flex-col items-center justify-center py-3 px-2 bg-linear-to-br from-[#D4AF37] to-[#B8860B] text-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <svg
                className="w-6 h-6 mb-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="text-xs font-medium">Helpline</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex gap-1">
            <button className="flex-1 py-3 px-4 bg-linear-to-r from-[#D4AF37] to-[#B8860B] text-white font-semibold rounded-t-lg text-sm">
              Properties
            </button>
            <Link
              href="/vip-plans"
              className="flex-1 py-3 px-4 bg-gray-100 text-gray-600 font-semibold rounded-t-lg text-sm hover:bg-gray-200 transition-colors text-center"
            >
              VIP Plans
            </Link>
          </div>
        </div>
      </div>

      {/* Building Carousel Section */}
      <section className="bg-white py-4">
        <div className="container mx-auto px-4">
          <BuildingCarousel />
        </div>
      </section>

      {/* Properties Listing Section */}
      <section className="container mx-auto px-4 py-4">
        <div className="space-y-4">
          {displayedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
}
