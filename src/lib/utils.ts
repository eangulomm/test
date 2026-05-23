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
  // 12 canciones, índices 0–11
  // 0:Ode to Sleep, 1:Holding On to You, 2:Migraine, 3:House of Gold,
  // 4:Car Radio, 5:Semi-Automatic, 6:Screen, 7:The Run and Go,
  // 8:Guns for Hands, 9:Trees, 10:Fake You Out, 11:Truce

  const scores = new Array(12).fill(0);

  // Pregunta 1 — relación con tu mente
  if (answers[0] === 0) { scores[0] += 2; scores[2] += 1; }  // A → Ode to Sleep / Migraine
  if (answers[0] === 1) { scores[1] += 2; scores[8] += 1; }  // B → Holding On to You / Guns for Hands
  if (answers[0] === 2) { scores[4] += 2; scores[6] += 1; }  // C → Car Radio / Screen
  if (answers[0] === 3) { scores[11] += 2; scores[9] += 1; } // D → Truce / Trees

  // Pregunta 2 — cuando todo se derrumba
  if (answers[1] === 0) { scores[4] += 2; scores[11] += 1; } // A → Car Radio / Truce
  if (answers[1] === 1) { scores[10] += 2; scores[5] += 1; } // B → Fake You Out / Semi-Automatic
  if (answers[1] === 2) { scores[7] += 2; scores[5] += 1; }  // C → The Run and Go / Semi-Automatic
  if (answers[1] === 3) { scores[1] += 2; scores[3] += 1; }  // D → Holding On to You / House of Gold

  // Pregunta 3 — ambiente
  if (answers[2] === 0) { scores[0] += 2; scores[8] += 1; }  // A → Ode to Sleep / Guns for Hands
  if (answers[2] === 1) { scores[3] += 2; scores[9] += 1; }  // B → House of Gold / Trees
  if (answers[2] === 2) { scores[7] += 2; scores[5] += 1; }  // C → The Run and Go / Semi-Automatic
  if (answers[2] === 3) { scores[4] += 2; scores[6] += 1; }  // D → Car Radio / Screen

  // Pregunta 4 — mayor miedo
  if (answers[3] === 0) { scores[2] += 2; scores[0] += 1; }  // A → Migraine / Ode to Sleep
  if (answers[3] === 1) { scores[3] += 2; scores[1] += 1; }  // B → House of Gold / Holding On to You
  if (answers[3] === 2) { scores[5] += 2; scores[7] += 1; }  // C → Semi-Automatic / The Run and Go
  if (answers[3] === 3) { scores[6] += 2; scores[4] += 1; }  // D → Screen / Car Radio

  // Pregunta 5 — relación con otros
  if (answers[4] === 0) { scores[10] += 2; scores[6] += 1; } // A → Fake You Out / Screen
  if (answers[4] === 1) { scores[1] += 2; scores[8] += 1; }  // B → Holding On to You / Guns for Hands
  if (answers[4] === 2) { scores[3] += 2; scores[9] += 1; }  // C → House of Gold / Trees
  if (answers[4] === 3) { scores[4] += 2; scores[11] += 1; } // D → Car Radio / Truce

  // Pregunta 6 — frase
  if (answers[5] === 0) { scores[2] += 2; scores[8] += 1; }  // A → Migraine / Guns for Hands
  if (answers[5] === 1) { scores[4] += 2; scores[0] += 1; }  // B → Car Radio / Ode to Sleep
  if (answers[5] === 2) { scores[10] += 2; scores[5] += 1; } // C → Fake You Out / Semi-Automatic
  if (answers[5] === 3) { scores[9] += 2; scores[3] += 1; }  // D → Trees / House of Gold

  // Pregunta 7 — cómo termina tu historia
  if (answers[6] === 0) { scores[11] += 2; scores[1] += 1; } // A → Truce / Holding On to You
  if (answers[6] === 1) { scores[7] += 2; scores[5] += 1; }  // B → The Run and Go / Semi-Automatic
  if (answers[6] === 2) { scores[9] += 2; scores[4] += 1; }  // C → Trees / Car Radio
  if (answers[6] === 3) { scores[3] += 2; scores[1] += 1; }  // D → House of Gold / Holding On to You

  // Retorna el índice con más puntos
  return scores.indexOf(Math.max(...scores));
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
