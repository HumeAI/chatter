import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function top3Prosody(scores: Record<string, number>) {
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([key, value]) => ({ name: key, score: value }))
    .map((entry) => {
      return { ...entry, score: Number(entry.score).toFixed(3) };
    });
}
