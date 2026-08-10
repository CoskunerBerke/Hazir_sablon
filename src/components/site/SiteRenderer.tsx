'use client';

import React from 'react';
import { SiteConfig } from '@/types/site-config';
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
  const { sectionOrder, sectionVisibility, features } = config;

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
        onClick={() => {
          if (isEditorPreview && onSelectSection) {
            onSelectSection(sectionId);
          }
        }}
      >
        {isSelected && (
          <div className="absolute top-3 right-4 z-30 px-3 py-1 rounded-full text-[11px] font-bold bg-brand-primary text-white shadow-md pointer-events-none uppercase tracking-wider flex items-center gap-1">
            <span>Düzenlenen Bölüm: {sectionId}</span>
          </div>
        )}
        {sectionContent}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-background text-foreground transition-colors duration-300">
      {/* Top Announcement Bar if enabled */}
      {features.showAnnouncementBar && features.announcementText && (
        <div className="bg-brand-primary text-white text-center py-2 px-4 text-xs font-bold tracking-wide">
          {features.announcementText}
        </div>
      )}

      <Header config={config as any} />

      <main className="flex-1">
        {sectionOrder.map((sectionId) => renderSectionComponent(sectionId))}
      </main>

      <Footer config={config as any} />
      <FloatingCTA config={config as any} />
    </div>
  );
};
