export interface Beverage {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  category: 'espresso' | 'filter' | 'cold-brew' | 'dessert';
  price: string;
  image: string;
  flavorNotes: string[];
  roastLevel: 'Light-Medium' | 'Medium-Dark' | 'Dark Fire-Roasted';
  origin: string;
  altitude: string;
  process: string;
  description: string;
  brewSpecs?: {
    ratio: string;
    temp: string;
    time: string;
  };
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: 'Flame' | 'Sprout' | 'Clock' | 'Wifi' | 'Heart' | 'Compass';
}

export interface CommunityNote {
  id: string;
  author: string;
  role: string;
  location: string;
  content: string;
  favoriteItem: string;
  rating: number;
  date: string;
}

export type BrewMethod = 'pour-over' | 'french-press' | 'aeropress' | 'espresso' | 'cold-brew';

export interface BrewProfile {
  name: string;
  defaultRatio: number; // grams of water per 1g of coffee
  grindSize: string;
  waterTempC: number;
  brewTimeSeconds: number;
  description: string;
}
