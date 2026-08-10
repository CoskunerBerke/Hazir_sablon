/**
 * Dynamic HSL Theme Engine & WCAG AA Color Contrast Calculator
 */

export interface ColorHSL {
  h: number;
  s: number;
  l: number;
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let cleanHex = hex.replace('#', '').trim();
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split('')
      .map((char) => char + char)
      .join('');
  }
  const num = parseInt(cleanHex, 16);
  if (isNaN(num)) {
    return { r: 124, g: 58, b: 237 }; // Fallback violet
  }
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

export function rgbToHsl(r: number, g: number, b: number): ColorHSL {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

/**
 * Calculates WCAG 2.0 relative luminance to determine optimal text contrast (white vs dark slate)
 */
export function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

export function getContrastTextColor(hex: string): string {
  const { r, g, b } = hexToRgb(hex);
  const luminance = getLuminance(r, g, b);
  // If background luminance is high (light color), use dark text; otherwise use white text
  return luminance > 0.45 ? '#09090b' : '#ffffff';
}

export function generateThemeCssVariables(
  primaryHex: string,
  secondaryHex: string = '#06B6D4',
  accentHex: string = '#F59E0B'
): Record<string, string> {
  const primaryRgb = hexToRgb(primaryHex);
  const primaryHsl = rgbToHsl(primaryRgb.r, primaryRgb.g, primaryRgb.b);

  const secondaryRgb = hexToRgb(secondaryHex);
  const accentRgb = hexToRgb(accentHex);

  const primaryText = getContrastTextColor(primaryHex);

  // Hover lightness adjustment
  const hoverL = Math.max(10, Math.min(90, primaryHsl.l > 50 ? primaryHsl.l - 10 : primaryHsl.l + 10));
  const lightL = Math.min(96, Math.max(88, primaryHsl.l + 35));

  return {
    '--brand-primary': primaryHex,
    '--brand-primary-rgb': `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`,
    '--brand-primary-hsl': `${primaryHsl.h} ${primaryHsl.s}% ${primaryHsl.l}%`,
    '--brand-primary-hover': `hsl(${primaryHsl.h}, ${primaryHsl.s}%, ${hoverL}%)`,
    '--brand-primary-light': `hsl(${primaryHsl.h}, ${Math.min(100, primaryHsl.s + 10)}%, ${lightL}%)`,
    '--brand-secondary': secondaryHex,
    '--brand-secondary-rgb': `${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}`,
    '--brand-accent': accentHex,
    '--brand-accent-rgb': `${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}`,
    '--text-on-primary': primaryText,
  };
}
