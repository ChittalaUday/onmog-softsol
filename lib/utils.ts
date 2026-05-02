import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLightPrimaryVariants(count: number = 5) {
  // Base primary hue is around 260 (Blue)
  // We generate variants with even more strength to ensure visibility and depth
  const variants = [];
  for (let i = 0; i < count; i++) {
    const lightness = 0.90 - (i * 0.05); // 0.90, 0.85, 0.80, 0.75, 0.70
    const chroma = 0.03 + (i * 0.02);    // more saturation
    variants.push(`oklch(${lightness * 100}% ${chroma} 260)`);
  }
  return variants;
}
