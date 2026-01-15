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

  return (
    <Link href={`/property/${property.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col">
        {/* Property Image */}
        <div className="relative w-full h-64 md:h-72 overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          {!property.available && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Sold Out
            </div>
          )}
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
            {property.type}
          </div>
        </div>

        {/* Property Details */}
        <div className="p-4 md:p-6 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 line-clamp-1">
            {property.name}
          </h3>
          <p className="text-gray-600 mb-3 text-sm md:text-base">{property.building}</p>
          
          <div className="flex items-center gap-4 mb-4 text-sm md:text-base">
            <div className="flex items-center gap-1 text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>{property.area} sqft</span>
            </div>
            <div className="flex items-center gap-1 text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>{property.bedrooms} BHK</span>
            </div>
            <div className="flex items-center gap-1 text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <span>{property.bathrooms}</span>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-blue-600">{formatPrice(property.price)}</p>
                <p className="text-xs md:text-sm text-gray-500">{property.location}</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm md:text-base">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
