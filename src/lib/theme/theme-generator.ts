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

  // Automatic WCAG AA contrast calculation (Returns #000000 or #ffffff)
  const primaryTextOnButton = getContrastTextColor(primaryHex);
  const secondaryTextOnButton = getContrastTextColor(secondaryHex);

  // Hover lightness adjustment
  const hoverL = Math.max(10, Math.min(90, primaryHsl.l > 50 ? primaryHsl.l - 14 : primaryHsl.l + 14));
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
    corporate: { heading: "'Outfit', sans-serif", body: "'Inter', sans-serif" },
  };

  const fonts = fontPairMap[typography?.fontPair || preset] || fontPairMap.modern;

  // Semantic Light vs Dark Mode Color Variables
  const isDark = mode === 'dark';

  const colorBackground = isDark ? '#09090b' : (colors.background || '#F8FAFC');
  const colorSurface = isDark ? '#18181b' : (colors.surface || '#FFFFFF');
  const colorSurfaceAlt = isDark ? '#27272a' : '#F1F5F9';
  const colorText = isDark ? '#F8FAFC' : (colors.textPrimary || '#0F172A');
  const colorTextMuted = isDark ? '#A1A1AA' : (colors.textMuted || '#64748B');
  const colorBorder = isDark ? '#27272a' : '#E2E8F0';

  return {
    // Exact Prompt Required Semantic Color System
    '--color-background': colorBackground,
    '--color-surface': colorSurface,
    '--color-surface-alt': colorSurfaceAlt,
    '--color-text': colorText,
    '--color-text-muted': colorTextMuted,
    '--color-border': colorBorder,
    '--color-primary': primaryHex,
    '--color-primary-hover': `hsl(${primaryHsl.h}, ${primaryHsl.s}%, ${hoverL}%)`,
    '--color-on-primary': primaryTextOnButton,

    // Component Theme Aliases
    '--brand-primary': primaryHex,
    '--brand-primary-rgb': `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`,
    '--brand-primary-hsl': `${primaryHsl.h} ${primaryHsl.s}% ${primaryHsl.l}%`,
    '--brand-primary-hover': `hsl(${primaryHsl.h}, ${primaryHsl.s}%, ${hoverL}%)`,
    '--brand-primary-light': `hsl(${primaryHsl.h}, ${Math.min(100, primaryHsl.s + 10)}%, ${lightL}%)`,
    '--brand-secondary': secondaryHex,
    '--brand-secondary-rgb': `${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}`,
    '--brand-accent': accentHex,
    '--brand-accent-rgb': `${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}`,
    '--background': colorBackground,
    '--surface': colorSurface,
    '--surface-card': colorSurface,
    '--surface-muted': colorSurfaceAlt,
    '--foreground': colorText,
    '--muted-foreground': colorTextMuted,
    '--border-color': colorBorder,
    '--text-on-primary': primaryTextOnButton,
    '--text-on-secondary': secondaryTextOnButton,
    '--radius-button': radiusMap[appearance?.borderRadius] || '9999px',
    '--radius-card': cardRadiusMap[appearance?.borderRadius] || '1rem',
    '--font-heading': fonts.heading,
    '--font-sans': fonts.body,
  };
}
