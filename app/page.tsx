import BuildingCarousel from './components/BuildingCarousel';
import PropertyCard from './components/PropertyCard';
import { properties } from './data/properties';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600">Lodha Group</h1>
            <nav className="hidden md:flex gap-6">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#properties" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Properties</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <BuildingCarousel />
      </section>

      {/* Properties Section */}
      <section id="properties" className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Properties</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Discover our premium collection of luxury homes and apartments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Lodha Group</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Lodha Group is one of India's premier real estate developers, known for creating world-class residential 
              and commercial properties. With a legacy spanning decades, we have delivered exceptional living spaces 
              that combine luxury, comfort, and modern amenities.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in the 
              real estate industry. Each of our projects is designed to offer the perfect blend of functionality 
              and elegance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
