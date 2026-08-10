'use client';

import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { SafeImage } from '../ui/SafeImage';
import { Lightbox } from '../ui/Lightbox';
import { Maximize2 } from 'lucide-react';
import { t } from '@/i18n/translations';

interface GallerySectionProps {
  config: any;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ config }) => {
  const galleryItems = config.gallery?.items || config.gallery || [];
  const features = config.features || {};
  const lang = config.language || 'tr';
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  if (!galleryItems || galleryItems.length === 0) return null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={config.gallery?.badge || t('sections.galleryBadge', lang)}
          title={config.gallery?.title || t('sections.galleryTitle', lang)}
          subtitle={config.gallery?.subtitle || t('sections.gallerySubtitle', lang)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item: any, index: number) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative rounded-3xl overflow-hidden shadow-md bg-slate-100 dark:bg-zinc-800 cursor-pointer aspect-[4/3] sm:aspect-square border border-slate-200/60 dark:border-zinc-700/60"
            >
              <SafeImage
                src={item.image}
                alt={item.alt || item.title || (lang === 'en' ? 'Gallery Image' : 'Galeri Görseli')}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                placeholderLabel={item.title || `${t('ui.galleryImage', lang)} ${index + 1}`}
                showDevBadge={features.showPlaceholderBadges}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <div className="p-2.5 rounded-full bg-white/20 text-white backdrop-blur-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-white space-y-1">
                  {item.category && (
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] uppercase font-bold tracking-wider bg-white/20 text-white backdrop-blur-sm">
                      {item.category}
                    </span>
                  )}
                  {item.title && <h4 className="text-base font-bold text-white leading-snug">{item.title}</h4>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        items={galleryItems}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
      />
    </section>
  );
};
