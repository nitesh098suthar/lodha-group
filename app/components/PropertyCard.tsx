import Image from 'next/image';
import { Property } from '../data/properties';

// Icons
const BedIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const AreaIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
);

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(price / 100000).toFixed(2)} L`;
  };

  const calculateDaily = (price: number) => {
    const monthly = price / (30 * 12);
    return Math.round(monthly / 30);
  };

  const calculateTotal = (price: number) => {
    return Math.round(price * 1.5);
  };

  const calculateDays = (price: number) => {
    return Math.round((price / calculateDaily(price)) / 30);
  };

  return (
    <div className="group bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 relative">
      {/* Image Section */}
      <div className="relative w-full h-72 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {!property.available && (
             <span className="bg-red-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
               Sold Out
             </span>
          )}
        </div>
        
        <div className="absolute top-4 right-4">
           <span className="bg-[#1A1A1A]/80 backdrop-blur-md text-[#D4AF37] px-3 py-1 rounded-full text-xs font-bold border border-[#D4AF37]/30 shadow-lg">
             Only 10 Left
           </span>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
            {property.name}
          </h3>
          <p className="text-white/80 text-xs flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {property.location}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Quick Stats Row */}
        <div className="flex items-center justify-between mb-6 text-sm text-gray-500 border-b border-gray-100 pb-4">
           <div className="flex items-center gap-1">
             <BedIcon />
             <span>{property.bedrooms} Bed</span>
           </div>
           <div className="w-px h-3 bg-gray-300"></div>
           <div className="flex items-center gap-1">
             <AreaIcon />
             <span>{property.area} sqft</span>
           </div>
           <div className="w-px h-3 bg-gray-300"></div>
           <div className="text-[#D4AF37] font-semibold">
             Premium
           </div>
        </div>

        {/* Financial Grid */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          <div className="text-center p-2 rounded-xl bg-gray-50 group-hover:bg-[#D4AF37]/5 transition-colors">
            <div className="text-[#D4AF37] font-bold text-sm md:text-base">{formatPrice(property.price)}</div>
            <div className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Price</div>
          </div>
          <div className="text-center p-2 rounded-xl bg-gray-50 group-hover:bg-[#D4AF37]/5 transition-colors">
            <div className="text-[#D4AF37] font-bold text-sm md:text-base">{formatPrice(calculateDaily(property.price))}</div>
            <div className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Daily</div>
          </div>
          <div className="text-center p-2 rounded-xl bg-gray-50 group-hover:bg-[#D4AF37]/5 transition-colors">
            <div className="text-[#D4AF37] font-bold text-sm md:text-base">{formatPrice(calculateTotal(property.price))}</div>
            <div className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Total</div>
          </div>
          <div className="text-center p-2 rounded-xl bg-gray-50 group-hover:bg-[#D4AF37]/5 transition-colors">
             <div className="text-[#D4AF37] font-bold text-sm md:text-base">{calculateDays(property.price)}</div>
             <div className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Days</div>
          </div>
        </div>

        {/* Invest Badge */}
        <div className="w-full bg-[#1A1A1A] text-white py-3 px-4 rounded-xl font-medium shadow-md flex items-center justify-center gap-2 cursor-default group-hover:scale-[1.02] transition-transform">
          <span className="text-[#D4AF37]">Invest</span>
          <span>•</span>
          <span className="opacity-90">{formatPrice(property.price)}</span>
        </div>
      </div>
    </div>
  );
}
