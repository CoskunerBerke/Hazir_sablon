'use client';

import React, { useEffect } from 'react';
import { SiteConfig } from '@/types/site-config';
import { generateCssVariablesFromConfig } from '@/lib/theme/theme-generator';
import { t } from '@/i18n/translations';
import { applyThemeToDocument } from '@/store/use-site-store';
import { Header } from '../layout/Header';
import { HeroSection } from '../sections/HeroSection';
import { TrustSection } from '../sections/TrustSection';
import { AboutSection } from '../sections/AboutSection';
import { ServicesSection } from '../sections/ServicesSection';
import { SpecialSection } from '../sections/SpecialSection';
import { GallerySection } from '../sections/GallerySection';
import { ReviewsSection } from '../sections/ReviewsSection';
import { ContactSection } from '../sections/ContactSection';
import { Footer } from '../layout/Footer';
import { FloatingCTA } from '../layout/FloatingCTA';

interface SiteRendererProps {
  config: SiteConfig;
  isEditorPreview?: boolean;
  onSelectSection?: (sectionId: string) => void;
  selectedSectionId?: string | null;
}

export const SiteRenderer: React.FC<SiteRendererProps> = ({
  config,
  isEditorPreview = false,
  onSelectSection,
  selectedSectionId,
}) => {
  const { sectionOrder = [], sectionVisibility = {}, features = {}, theme, language = 'tr' } = config || {};

  // Dynamically compute CSS variables from live store config
  const themeCssVars = theme ? generateCssVariablesFromConfig(theme) : {};
  const isDark = theme?.mode === 'dark';

  useEffect(() => {
    applyThemeToDocument(theme?.mode, language);
  }, [theme?.mode, language]);

  const SECTION_BADGE_NAMES: Record<string, string> = {
    hero: language === 'en' ? 'Hero / Banner' : 'Giriş / Manşet',
    trust: language === 'en' ? 'Trust Badges' : 'Güven Rozetleri',
    about: language === 'en' ? 'About Us' : 'Hakkımızda',
    services: language === 'en' ? 'Services & Products' : 'Hizmetler & Ürünler',
    special: language === 'en' ? 'Service Process' : 'İnteraktif Özel Bölüm',
    gallery: language === 'en' ? 'Gallery' : 'Galeri',
    reviews: language === 'en' ? 'Reviews' : 'Müşteri Yorumları',
    contact: language === 'en' ? 'Contact & Map' : 'İletişim & Harita',
  };

  const renderSectionComponent = (sectionId: string) => {
    if (!sectionVisibility[sectionId]) return null;

    const isSelected = isEditorPreview && selectedSectionId === sectionId;
    const wrapperClass = isEditorPreview
      ? `relative transition-all duration-200 cursor-pointer ${
          isSelected
            ? 'ring-2 ring-brand-primary ring-offset-2 z-20 shadow-xl'
            : 'hover:ring-1 hover:ring-brand-primary/40'
        }`
      : '';

    const sectionContent = (() => {
      switch (sectionId) {
        case 'hero':
          return <HeroSection config={config as any} />;
        case 'trust':
          return <TrustSection config={config as any} />;
        case 'about':
          return <AboutSection config={config as any} />;
        case 'services':
          return <ServicesSection config={config as any} />;
        case 'special':
          return <SpecialSection config={config as any} />;
        case 'gallery':
          return <GallerySection config={config as any} />;
        case 'reviews':
          return <ReviewsSection config={config as any} />;
        case 'contact':
          return <ContactSection config={config as any} />;
        default:
          return null;
      }
    })();

    if (!sectionContent) return null;

    return (
      <div
        key={sectionId}
        id={sectionId}
        className={wrapperClass}
        onClick={(e) => {
          if (isEditorPreview && onSelectSection) {
            e.stopPropagation();
            onSelectSection(sectionId);
          }
        }}
      >
        {isSelected && (
          <div className="absolute top-3 right-4 z-30 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-brand-primary text-[var(--color-on-primary)] shadow-lg pointer-events-none uppercase tracking-wider flex items-center gap-1.5 animate-pulse">
            <span>✏️ {t('ui.editingSection', language)}: {SECTION_BADGE_NAMES[sectionId] || sectionId}</span>
          </div>
        )}
        {sectionContent}
      </div>
    );
  };

  const feat = (features || {}) as any;

  return (
    <div
      data-theme={isDark ? 'dark' : 'light'}
      data-style-preset={theme?.preset || 'minimal'}
      className={`min-h-screen flex flex-col justify-between bg-background text-foreground transition-colors duration-300 ${
        isDark ? 'dark' : ''
      }`}
      style={themeCssVars as React.CSSProperties}
    >
      {/* Inject Live Dynamic Theme CSS Variables */}
      <style dangerouslySetInnerHTML={{
        __html: `
          :root, [data-style-preset] {
            ${Object.entries(themeCssVars).map(([k, v]) => `${k}: ${v};`).join('\n')}
          }
        `
      }} />

      {/* Top Announcement Bar if enabled */}
      {feat.showAnnouncementBar && feat.announcementText && (
        <div className="bg-brand-primary text-[var(--color-on-primary)] text-center py-2 px-4 text-xs font-bold tracking-wide">
          {feat.announcementText}
        </div>
      )}

      <Header config={config as any} isEditorPreview={isEditorPreview} />

      <main className="flex-1">
        {sectionOrder.map((sectionId) => renderSectionComponent(sectionId))}
      </main>

      <Footer config={config as any} />
      <FloatingCTA config={config as any} />
    </div>
  );
};
