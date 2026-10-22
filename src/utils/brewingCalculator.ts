import { BrewMethod, BrewProfile } from '../types/coffee';

export const BREW_PROFILES: Record<BrewMethod, BrewProfile> = {
  'pour-over': {
    name: 'V60 Pour-Over',
    defaultRatio: 16, // 1:16
    grindSize: 'Medium-Fine',
    waterTempC: 93,
    brewTimeSeconds: 180,
    description: 'Clean extraction highlighting vibrant floral notes and crisp citrus acidity.'
  },
  'french-press': {
    name: 'Immersion French Press',
    defaultRatio: 15, // 1:15
    grindSize: 'Coarse',
    waterTempC: 94,
    brewTimeSeconds: 240,
    description: 'Full-bodied, rich texture with dark cacao and toasted hazelnut depth.'
  },
  'aeropress': {
    name: 'Inverted AeroPress',
    defaultRatio: 14, // 1:14
    grindSize: 'Fine-Medium',
    waterTempC: 88,
    brewTimeSeconds: 120,
    description: 'Intense, velvety concentration with balanced sweetness.'
  },
  'espresso': {
    name: 'Double Ristretto',
    defaultRatio: 2, // 1:2
    grindSize: 'Very Fine',
    waterTempC: 92,
    brewTimeSeconds: 28,
    description: 'Syrupy crema, high density, and notes of caramelized brown sugar.'
  },
  'cold-brew': {
    name: 'Kyoto Cold Extraction',
    defaultRatio: 8, // 1:8 concentrate
    grindSize: 'Extra Coarse',
    waterTempC: 4,
    brewTimeSeconds: 57600, // 16 hours
    description: 'Zero bitterness, naturally sweet, with dark cherry and molasses finish.'
  }
};

/**
 * Calculates water amount (in ml/grams) needed for a given coffee dry weight and ratio.
 */
export function calculateBrewWater(coffeeGrams: number, ratio: number): number {
  if (coffeeGrams <= 0 || ratio <= 0) return 0;
  return Math.round(coffeeGrams * ratio);
}

/**
 * Calculates coffee amount needed for a target brew liquid volume and ratio.
 */
export function calculateCoffeeDose(waterVolumeMl: number, ratio: number): number {
  if (waterVolumeMl <= 0 || ratio <= 0) return 0;
  return Number((waterVolumeMl / ratio).toFixed(1));
}

/**
 * Validates email format for the newsletter sign-up.
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return regex.test(trimmed);
}

/**
 * Formats seconds into mm:ss display string.
 */
export function formatTimerSeconds(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
