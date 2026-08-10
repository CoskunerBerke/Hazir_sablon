import { StylePresetId, ThemeConfig } from '@/types/site-config';

export interface StylePresetDefinition {
  id: StylePresetId;
  name: string;
  description: string;
  previewColor: string;
  themeDefaults: Partial<ThemeConfig>;
}

export const STYLE_PRESETS: StylePresetDefinition[] = [
  {
    id: 'minimal',
    name: 'Minimal Modern',
    description: 'Sade, yüksek kontrastlı, keskin hatlı ve ferah tasarım stili.',
    previewColor: '#0F172A',
    themeDefaults: {
      colors: {
        primary: '#0F172A',
        secondary: '#64748B',
        accent: '#3B82F6',
        background: '#FFFFFF',
        surface: '#F8FAFC',
        textPrimary: '#0F172A',
        textMuted: '#64748B',
      },
      typography: {
        fontPair: 'sans',
        headingFont: 'Inter',
        bodyFont: 'Inter',
        headingScale: 1.0,
        bodyScale: 1.0,
        letterSpacing: 'tight',
      },
      appearance: {
        borderRadius: 'sm',
        buttonStyle: 'solid',
        shadow: 'sm',
        containerWidth: 'normal',
        sectionSpacing: 'normal',
        animationLevel: 'normal',
      },
    },
  },
  {
    id: 'luxury',
    name: 'Luxury Editorial',
    description: 'Serif başlıklar, zarif mor ve altın vurgular, yuvarlatılmış lüks yüzeyler.',
    previewColor: '#7C3AED',
    themeDefaults: {
      colors: {
        primary: '#7C3AED',
        secondary: '#06B6D4',
        accent: '#F59E0B',
        background: '#FAF8FC',
        surface: '#FFFFFF',
        textPrimary: '#1E1B4B',
        textMuted: '#6B7280',
      },
      typography: {
        fontPair: 'editorial',
        headingFont: 'Playfair Display',
        bodyFont: 'Inter',
        headingScale: 1.1,
        bodyScale: 1.0,
        letterSpacing: 'normal',
      },
      appearance: {
        borderRadius: 'lg',
        buttonStyle: 'pill',
        shadow: 'lg',
        containerWidth: 'normal',
        sectionSpacing: 'spacious',
        animationLevel: 'normal',
      },
    },
  },
  {
    id: 'warm',
    name: 'Warm Organic',
    description: 'Sıcak krem arka plan, kehribar tonlar, dost canlısı yuvarlak kartlar.',
    previewColor: '#D97706',
    themeDefaults: {
      colors: {
        primary: '#D97706',
        secondary: '#059669',
        accent: '#F59E0B',
        background: '#FFFDF9',
        surface: '#FBF7F0',
        textPrimary: '#451A03',
        textMuted: '#78350F',
      },
      typography: {
        fontPair: 'warm',
        headingFont: 'Outfit',
        bodyFont: 'Inter',
        headingScale: 1.05,
        bodyScale: 1.0,
        letterSpacing: 'normal',
      },
      appearance: {
        borderRadius: 'full',
        buttonStyle: 'pill',
        shadow: 'md',
        containerWidth: 'normal',
        sectionSpacing: 'normal',
        animationLevel: 'normal',
      },
    },
  },
  {
    id: 'editorial',
    name: 'Editorial Magazine',
    description: 'Dergi düzeni tipografisi, keskin çerçeveler, yüksek sanatsal vurgu.',
    previewColor: '#111827',
    themeDefaults: {
      colors: {
        primary: '#111827',
        secondary: '#4B5563',
        accent: '#E53E3E',
        background: '#F9FAFB',
        surface: '#FFFFFF',
        textPrimary: '#111827',
        textMuted: '#4B5563',
      },
      typography: {
        fontPair: 'editorial',
        headingFont: 'Playfair Display',
        bodyFont: 'Inter',
        headingScale: 1.2,
        bodyScale: 1.0,
        letterSpacing: 'tight',
      },
      appearance: {
        borderRadius: 'sharp',
        buttonStyle: 'outline',
        shadow: 'none',
        containerWidth: 'wide',
        sectionSpacing: 'spacious',
        animationLevel: 'subtle',
      },
    },
  },
  {
    id: 'bold',
    name: 'Bold Creative',
    description: 'Canlı renk patlamaları, geniş başlıklar, yüksek dinamizmli yüzeyler.',
    previewColor: '#2563EB',
    themeDefaults: {
      colors: {
        primary: '#2563EB',
        secondary: '#EC4899',
        accent: '#10B981',
        background: '#F0F6FF',
        surface: '#FFFFFF',
        textPrimary: '#1E293B',
        textMuted: '#64748B',
      },
      typography: {
        fontPair: 'bold',
        headingFont: 'Outfit',
        bodyFont: 'Inter',
        headingScale: 1.15,
        bodyScale: 1.0,
        letterSpacing: 'tight',
      },
      appearance: {
        borderRadius: 'md',
        buttonStyle: 'solid',
        shadow: 'lg',
        containerWidth: 'wide',
        sectionSpacing: 'normal',
        animationLevel: 'normal',
      },
    },
  },
  {
    id: 'corporate',
    name: 'Corporate Clean',
    description: 'Güven veren kurumsal lacivert/mavi tonlar, düzenli ve profesyonel kart yapısı.',
    previewColor: '#0284C7',
    themeDefaults: {
      colors: {
        primary: '#0284C7',
        secondary: '#0F172A',
        accent: '#F59E0B',
        background: '#F8FAFC',
        surface: '#FFFFFF',
        textPrimary: '#0F172A',
        textMuted: '#475569',
      },
      typography: {
        fontPair: 'modern',
        headingFont: 'Outfit',
        bodyFont: 'Inter',
        headingScale: 1.0,
        bodyScale: 1.0,
        letterSpacing: 'normal',
      },
      appearance: {
        borderRadius: 'sm',
        buttonStyle: 'soft',
        shadow: 'sm',
        containerWidth: 'normal',
        sectionSpacing: 'compact',
        animationLevel: 'subtle',
      },
    },
  },
];
