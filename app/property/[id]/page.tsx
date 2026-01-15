import Image from 'next/image';
import Link from 'next/link';
import { properties } from '../../data/properties';
import { notFound } from 'next/navigation';

interface PropertyDetailPageProps {
  params: {
    id: string;
  };
}

export default function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const property = properties.find((p) => p.id === params.id);

  if (!property) {
    notFound();
  }

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(price / 100000).toFixed(2)} L`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl md:text-3xl font-bold text-blue-600">
              Lodha Group
            </Link>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="hidden md:inline">Back to Home</span>
              <span className="md:hidden">Back</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Property Images Gallery */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={property.images[0]}
                alt={property.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {property.images.slice(1, 3).map((image, index) => (
              <div key={index} className="relative w-full h-32 md:h-48 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${property.name} ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="container mx-auto px-4 pb-8 md:pb-12">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          {/* Header Info */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                {property.type}
              </span>
              {property.available ? (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Available
                </span>
              ) : (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Sold Out
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{property.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{property.building}</p>
            <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{formatPrice(property.price)}</p>
            <p className="text-gray-600 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {property.location}
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 py-6 border-y border-gray-200">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{property.area}</div>
              <div className="text-sm md:text-base text-gray-600">Sq. Ft.</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{property.bedrooms}</div>
              <div className="text-sm md:text-base text-gray-600">Bedrooms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{property.bathrooms}</div>
              <div className="text-sm md:text-base text-gray-600">Bathrooms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{property.type}</div>
              <div className="text-sm md:text-base text-gray-600">Type</div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{property.description}</p>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {property.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-lg"
                >
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Interested in this property?</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+911234567890"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a
                href="mailto:info@lodhagroup.com"
                className="flex-1 bg-white hover:bg-gray-50 text-blue-600 text-center py-3 px-6 rounded-lg font-semibold border-2 border-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
