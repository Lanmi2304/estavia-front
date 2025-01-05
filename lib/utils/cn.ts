import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A function that combines multiple class values
 * and returns a merged string of class names.
 *
 * @param inputs - An array of class values to be merged.
 * @returns A string of merged class names.
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
