export type CarCategory = 'Sports' | 'Sedan' | 'SUV' | 'Luxury' | 'Electric';
export type FuelType = 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
export type TransmissionType = 'Manual' | 'Automatic';
export type BudgetTier = '₹5L' | '₹10L' | '₹20L' | '₹50L+';
export type Purpose = 'Daily commute' | 'Family' | 'Performance' | 'Luxury' | 'Adventure';
export type Priority = 'Performance' | 'Mileage' | 'Safety' | 'Comfort' | 'Technology';

export interface CarColorOption {
  name: string;
  hex: string;
  secondaryHex?: string;
  finish: 'Metallic' | 'Pearl' | 'Matte' | 'Gloss';
}

export interface WheelOption {
  id: 'aero' | 'sport' | 'performance' | 'carbon';
  name: string;
  spec: string;
  priceDiff: number;
  rimColor?: string;
}

export type Car3DModelType = 'gt-supercar' | 'luxury-sedan' | 'performance-suv' | 'cyber-hypercar' | 'sport-coupe';

export interface Car {
  id: string;
  name: string;
  brand: string;
  tagline: string;
  category: CarCategory;
  modelType: Car3DModelType;
  modelPath?: string;
  signatureColor: string;
  signatureColorName: string;
  price: number; // in INR
  priceDisplay: string;
  horsepower: number;
  torque: number; // Nm
  zeroToHundred: number; // seconds
  topSpeed: number; // km/h
  fuelType: FuelType;
  transmission: TransmissionType;
  range?: number; // km
  efficiency: string;
  safetyRating: string;
  images: string[];
  model?: string;
  colors: string[];
  features: string[];
  description: string;
  exteriorDesign: string;
  techFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  matchProfile: {
    budget: BudgetTier;
    purposes: Purpose[];
    fuel: FuelType[];
    transmission: TransmissionType[];
    priorities: Priority[];
    matchPitch: string;
  };
}

export type PageRoute = 'home' | 'cars' | 'details' | 'compare' | 'find-my-car' | 'about';
