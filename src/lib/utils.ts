import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import humanizedDuration from 'humanize-duration';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDuration(seconds: number) {
  return humanizedDuration(seconds * 1000, {
    language: 'en',
    round: true,
    largest: 2,
    units: ['h', 'm', 's'],
  });
}
