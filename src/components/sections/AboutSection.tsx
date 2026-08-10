import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { SafeImage } from '../ui/SafeImage';
import { CheckCircle2 } from 'lucide-react';
import { t } from '@/i18n/translations';

interface AboutSectionProps {
  config: any;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config }) => {
  const about = config?.about || {};
  const features = config?.features || {};
  const lang = config?.language || 'tr';
  const paragraphs = about.text || [];
  const highlights = about.highlights || [];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
              <SafeImage
                src={about.image}
                alt={about.title || t('sections.aboutBadge', lang)}
                fill
                className="object-cover"
                placeholderLabel={t('ui.aboutImage', lang)}
                showDevBadge={features.showPlaceholderBadges}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="text-xs uppercase font-semibold tracking-wider opacity-80">{config?.business?.industry || config?.industry}</p>
                <h4 className="text-xl font-bold">{config?.business?.name || config?.businessName}</h4>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Highlights */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeader
              badge={about.badge || t('sections.aboutBadge', lang)}
              title={about.title || t('sections.aboutTitle', lang)}
              subtitle={about.subtitle || t('sections.aboutSubtitle', lang)}
              align="left"
              className="mb-6"
            />

            <div className="space-y-4 text-muted text-base leading-relaxed">
              {paragraphs.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Highlights List */}
            {highlights.length > 0 && (
              <div className="pt-4 border-t border-slate-200 dark:border-zinc-800 space-y-3">
                {highlights.map((highlight: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 text-sm font-semibold text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
