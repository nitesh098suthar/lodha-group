export interface VIPPlan {
  id: string;
  name: string;
  price: number;
  daily: number;
  total: number;
  days: number;
  limit: number;
  image: string;
  description: string;
}

export const vipPlans: VIPPlan[] = [
  {
    id: '1',
    name: 'VIP Plan 1',
    price: 1000,
    daily: 1820,
    total: 5460,
    days: 3,
    limit: 3,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    description: 'Premium investment plan with high returns'
  },
  {
    id: '2',
    name: 'VIP Plan 2',
    price: 2000,
    daily: 3500,
    total: 10500,
    days: 3,
    limit: 5,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    description: 'Exclusive investment opportunity'
  },
  {
    id: '3',
    name: 'VIP Plan 3',
    price: 5000,
    daily: 8750,
    total: 26250,
    days: 3,
    limit: 10,
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
    description: 'Ultra-premium investment package'
  },
  {
    id: '4',
    name: 'VIP Plan 4',
    price: 10000,
    daily: 18000,
    total: 54000,
    days: 3,
    limit: 15,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    description: 'Elite investment plan for high net worth'
  },
  {
    id: '5',
    name: 'VIP Plan 5',
    price: 20000,
    daily: 36000,
    total: 108000,
    days: 3,
    limit: 20,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    description: 'Superior investment package for serious investors'
  },
  {
    id: '6',
    name: 'VIP Plan 6',
    price: 50000,
    daily: 95000,
    total: 285000,
    days: 3,
    limit: 10,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    description: 'Luxury estate investment portfolio'
  },
  {
    id: '7',
    name: 'VIP Plan 7',
    price: 75000,
    daily: 145000,
    total: 435000,
    days: 3,
    limit: 5,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    description: 'Premium flagship investment opportunity'
  },
  {
    id: '8',
    name: 'VIP Plan 8',
    price: 100000,
    daily: 200000,
    total: 600000,
    days: 3,
    limit: 3,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
    description: 'Ultimate wealth generation plan'
  },
  {
    id: '9',
    name: 'Presidential Plan',
    price: 150000,
    daily: 310000,
    total: 930000,
    days: 3,
    limit: 1,
    image: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=800&h=600&fit=crop',
    description: 'The most exclusive investment tier available'
  }
];
