import { SiteConfig, ThemeConfig } from '@/types/site-config';
import { getContrastTextColor } from '../theme';

export function generateCssVariablesFromConfig(theme: ThemeConfig): Record<string, string> {
  const { colors, appearance, typography } = theme;

  const primaryTextOnButton = getContrastTextColor(colors.primary);
  const secondaryTextOnButton = getContrastTextColor(colors.secondary);

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
    playful: { heading: "'Outfit', sans-serif", body: "'Inter', sans-serif" },
  };

  const fonts = fontPairMap[typography.fontPair] || fontPairMap.modern;

  return {
    '--brand-primary': colors.primary,
    '--brand-secondary': colors.secondary,
    '--brand-accent': colors.accent,
    '--background': colors.background,
    '--surface': colors.surface,
    '--surface-card': colors.surface,
    '--foreground': colors.textPrimary,
    '--muted-foreground': colors.textMuted,
    '--text-on-primary': primaryTextOnButton,
    '--text-on-secondary': secondaryTextOnButton,
    '--radius-button': radiusMap[appearance.borderRadius] || '9999px',
    '--radius-card': cardRadiusMap[appearance.borderRadius] || '1rem',
    '--font-heading': fonts.heading,
    '--font-sans': fonts.body,
  };
}
