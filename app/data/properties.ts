export interface Property {
  id: string;
  name: string;
  building: string;
  type: string; // 'apartment' | 'villa' | 'penthouse'
  price: number;
  area: number; // in sqft
  bedrooms: number;
  bathrooms: number;
  location: string;
  description: string;
  images: string[];
  amenities: string[];
  available: boolean;
}

export const buildings = [
  {
    id: '1',
    name: 'Lodha Park',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop',
    description: 'Luxury residential complex in the heart of the city'
  },
  {
    id: '2',
    name: 'Lodha Upper Thane',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop',
    description: 'Premium apartments with world-class amenities'
  },
  {
    id: '3',
    name: 'Lodha Evoq',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=600&fit=crop',
    description: 'Modern living spaces with stunning city views'
  },
  {
    id: '4',
    name: 'Lodha Amara',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=600&fit=crop',
    description: 'Elegant homes in a serene environment'
  }
];

export const properties: Property[] = [
  {
    id: '1',
    name: 'Spacious 3BHK Apartment',
    building: 'Lodha Park',
    type: 'apartment',
    price: 8500000,
    area: 1850,
    bedrooms: 3,
    bathrooms: 2,
    location: 'Mumbai, Maharashtra',
    description: 'Beautifully designed 3BHK apartment with modern interiors and premium finishes. Features large windows offering natural light, spacious living area, and a well-equipped kitchen. Located in a prime area with excellent connectivity.',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'
    ],
    amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Garden', 'Clubhouse'],
    available: true
  },
  {
    id: '2',
    name: 'Luxury 4BHK Villa',
    building: 'Lodha Upper Thane',
    type: 'villa',
    price: 25000000,
    area: 3500,
    bedrooms: 4,
    bathrooms: 3,
    location: 'Thane, Maharashtra',
    description: 'Stunning 4BHK villa with private garden and modern architecture. Features include a private terrace, home automation, premium Italian marble flooring, and designer kitchens. Perfect for families seeking luxury living.',
    images: [
      'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop'
    ],
    amenities: ['Private Garden', 'Swimming Pool', 'Gym', 'Parking', 'Security', 'Home Automation'],
    available: true
  },
  {
    id: '3',
    name: 'Premium 2BHK Apartment',
    building: 'Lodha Evoq',
    type: 'apartment',
    price: 5500000,
    area: 1200,
    bedrooms: 2,
    bathrooms: 2,
    location: 'Mumbai, Maharashtra',
    description: 'Compact yet spacious 2BHK apartment ideal for young professionals and small families. Features modern design, efficient space utilization, and all essential amenities. Great investment opportunity.',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560449752-915f6785a5e5?w=800&h=600&fit=crop'
    ],
    amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Rooftop Garden'],
    available: true
  },
  {
    id: '4',
    name: 'Penthouse Suite',
    building: 'Lodha Amara',
    type: 'penthouse',
    price: 45000000,
    area: 5000,
    bedrooms: 5,
    bathrooms: 4,
    location: 'Mumbai, Maharashtra',
    description: 'Exclusive penthouse with panoramic city views and private terrace. Features include a private elevator, home theater, wine cellar, and premium finishes throughout. The epitome of luxury living.',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
    ],
    amenities: ['Private Terrace', 'Home Theater', 'Wine Cellar', 'Private Elevator', 'Swimming Pool', 'Gym', 'Concierge'],
    available: true
  },
  {
    id: '5',
    name: 'Modern 3BHK Apartment',
    building: 'Lodha Park',
    type: 'apartment',
    price: 9200000,
    area: 1950,
    bedrooms: 3,
    bathrooms: 2,
    location: 'Mumbai, Maharashtra',
    description: 'Contemporary 3BHK apartment with smart home features and premium amenities. Features open-plan living, modern kitchen with appliances, and spacious bedrooms. Located in a well-connected area.',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    ],
    amenities: ['Smart Home', 'Swimming Pool', 'Gym', 'Parking', 'Security', 'Clubhouse', 'Kids Play Area'],
    available: true
  },
  {
    id: '6',
    name: 'Cozy 1BHK Apartment',
    building: 'Lodha Evoq',
    type: 'apartment',
    price: 3200000,
    area: 650,
    bedrooms: 1,
    bathrooms: 1,
    location: 'Mumbai, Maharashtra',
    description: 'Perfect starter home or investment property. Well-designed 1BHK with all modern amenities. Compact yet comfortable, ideal for singles or couples. Great location with easy access to business districts.',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560449752-915f6785a5e5?w=800&h=600&fit=crop'
    ],
    amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Rooftop Garden'],
    available: true
  },
  {
    id: '7',
    name: 'Elegant 2BHK Apartment',
    building: 'Lodha Upper Thane',
    type: 'apartment',
    price: 6800000,
    area: 1350,
    bedrooms: 2,
    bathrooms: 2,
    location: 'Thane, Maharashtra',
    description: 'Spacious 2BHK apartment with premium finishes and modern amenities. Features include large balconies, modular kitchen, and designer bathrooms. Perfect for growing families.',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560449752-915f6785a5e5?w=800&h=600&fit=crop'
    ],
    amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Garden', 'Clubhouse'],
    available: true
  },
  {
    id: '8',
    name: 'Luxury 5BHK Villa',
    building: 'Lodha Amara',
    type: 'villa',
    price: 35000000,
    area: 4500,
    bedrooms: 5,
    bathrooms: 4,
    location: 'Mumbai, Maharashtra',
    description: 'Ultra-luxury 5BHK villa with private pool and landscaped gardens. Features include home automation, private theater, wine cellar, and premium Italian marble throughout. The ultimate luxury living experience.',
    images: [
      'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop'
    ],
    amenities: ['Private Pool', 'Private Garden', 'Home Theater', 'Wine Cellar', 'Gym', 'Parking', 'Security', 'Home Automation'],
    available: true
  }
];
