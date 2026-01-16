import Image from 'next/image';
import Link from 'next/link';
import { Property } from '../data/properties';

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
    // Assuming 30 years loan, approximate daily payment
    const monthly = price / (30 * 12);
    return Math.round(monthly / 30);
  };

  const calculateTotal = (price: number) => {
    // Total over loan period (approximate)
    return Math.round(price * 1.5);
  };

  const calculateDays = (price: number) => {
    // Approximate days for loan period
    return Math.round((price / calculateDaily(price)) / 30);
  };

  return (
    <Link href={`/property/${property.id}`}>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
        {/* Property Image - Large like mobile app */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            className="object-cover"
          />
          {/* Limit Badge */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
            Limit: 10
          </div>
          {!property.available && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-lg text-xs font-semibold">
              Sold Out
            </div>
          )}
        </div>

        {/* Property Title */}
        <div className="px-4 pt-4 pb-2">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            {property.name}
          </h3>
        </div>

        {/* Info Boxes - Exact mobile app style */}
        <div className="px-4 pb-4">
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center shadow-sm">
              <div className="text-base md:text-lg font-bold text-[#D4AF37] mb-1">{formatPrice(property.price)}</div>
              <div className="text-xs text-gray-600">Price</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center shadow-sm">
              <div className="text-base md:text-lg font-bold text-[#D4AF37] mb-1">{formatPrice(calculateDaily(property.price))}</div>
              <div className="text-xs text-gray-600">Daily</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center shadow-sm">
              <div className="text-base md:text-lg font-bold text-[#D4AF37] mb-1">{formatPrice(calculateTotal(property.price))}</div>
              <div className="text-xs text-gray-600">Total</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center shadow-sm">
              <div className="text-base md:text-lg font-bold text-[#D4AF37] mb-1">{calculateDays(property.price)}</div>
              <div className="text-xs text-gray-600">Days</div>
            </div>
          </div>

          {/* Buy Now Button - Exact mobile app style */}
          <button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#8B6914] text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg text-sm md:text-base">
            Buy now ({formatPrice(property.price)})
          </button>
        </div>
      </div>
    </Link>
  );
}
