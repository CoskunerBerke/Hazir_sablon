import { ThemeConfig } from '@/types/site-config';
import { hexToRgb, rgbToHsl, getContrastTextColor } from '../theme';

export function generateCssVariablesFromConfig(theme: ThemeConfig): Record<string, string> {
  const { colors, appearance, typography, preset, mode } = theme;

  const primaryHex = colors.primary || '#3B82F6';
  const secondaryHex = colors.secondary || '#06B6D4';
  const accentHex = colors.accent || '#F59E0B';

  const primaryRgb = hexToRgb(primaryHex);
  const primaryHsl = rgbToHsl(primaryRgb.r, primaryRgb.g, primaryRgb.b);

  const secondaryRgb = hexToRgb(secondaryHex);
  const accentRgb = hexToRgb(accentHex);

  const primaryTextOnButton = getContrastTextColor(primaryHex);
  const secondaryTextOnButton = getContrastTextColor(secondaryHex);

  // Hover lightness adjustment
  const hoverL = Math.max(10, Math.min(90, primaryHsl.l > 50 ? primaryHsl.l - 12 : primaryHsl.l + 12));
  const lightL = Math.min(96, Math.max(88, primaryHsl.l + 35));

  // Border Radius Mapping
  const radiusMap: Record<string, string> = {
    sharp: '0px',
    sm: '0.375rem',
    md: '0.75rem',
    lg: '1.25rem',
    full: '9999px',
  };

  const cardRadiusMap: Record<string, string> = {
    sharp: '0px',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    full: '2rem',
  };

  // Font Family Mapping
  const fontPairMap: Record<string, { heading: string; body: string }> = {
    sans: { heading: "'Inter', sans-serif", body: "'Inter', sans-serif" },
    modern: { heading: "'Outfit', sans-serif", body: "'Inter', sans-serif" },
    editorial: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
    warm: { heading: "'Outfit', sans-serif", body: "'Inter', sans-serif" },
    bold: { heading: "'Outfit', sans-serif", body: "'Inter', sans-serif" },
    luxury: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
  };

  const fonts = fontPairMap[typography?.fontPair || preset] || fontPairMap.modern;

  // Preset Overrides
  let bgValue = colors.background || '#F8FAFC';
  let surfaceValue = colors.surface || '#FFFFFF';
  let textPrimaryValue = colors.textPrimary || '#0F172A';
  let textMutedValue = colors.textMuted || '#64748B';

  if (mode === 'dark') {
    bgValue = colors.background !== '#F8FAFC' ? colors.background : '#09090b';
    surfaceValue = colors.surface !== '#FFFFFF' ? colors.surface : '#18181b';
    textPrimaryValue = colors.textPrimary !== '#0F172A' ? colors.textPrimary : '#f8fafc';
    textMutedValue = colors.textMuted !== '#64748B' ? colors.textMuted : '#a1a1aa';
  }

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
    '--background': bgValue,
    '--surface': surfaceValue,
    '--surface-card': surfaceValue,
    '--surface-muted': mode === 'dark' ? '#27272a' : '#f8fafc',
    '--foreground': textPrimaryValue,
    '--muted-foreground': textMutedValue,
    '--text-on-primary': primaryTextOnButton,
    '--text-on-secondary': secondaryTextOnButton,
    '--radius-button': radiusMap[appearance?.borderRadius] || '9999px',
    '--radius-card': cardRadiusMap[appearance?.borderRadius] || '1rem',
    '--font-heading': fonts.heading,
    '--font-sans': fonts.body,
  };
}
