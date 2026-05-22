import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely, resolving conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculate quiz result index from answers array.
 * Each answer maps to a result index (0–3).
 * Simple sum → modulo approach; replace with real scoring logic.
 */
export function calculateResult(answers: number[]): number {
  const sum = answers.reduce((acc, val) => acc + val, 0);
  return sum % 4; // Returns 0–3 index into QUIZ_RESULTS
}

/**
 * Format price string cleanly.
 */
export function formatPrice(price: string): string {
  return price.startsWith("$") ? price : `$${price}`;
}

/**
 * Clamp a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
