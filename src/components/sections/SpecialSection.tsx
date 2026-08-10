'use client';

import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { DynamicIcon } from '../ui/DynamicIcon';
import { Check, MessageSquare } from 'lucide-react';

interface SpecialSectionProps {
  config: any;
}

export const SpecialSection: React.FC<SpecialSectionProps> = ({ config }) => {
  const { specialSection, features, contact } = config || {};

  const isEnabled = features?.showSpecialSection ?? specialSection?.enabled ?? true;
  if (!isEnabled || !specialSection) return null;

  const menuCategories = specialSection.menuCategories || [];
  const menuItems = specialSection.menuItems || [];
  const beforeAfterItems = specialSection.beforeAfterItems || [];
  const steps = specialSection.steps || [];
  const packages = specialSection.packages || [];
  const faqs = specialSection.faqs || [];

  const [activeCategory, setActiveCategory] = useState<string>(
    menuCategories[0] || 'Tümü'
  );

  const whatsappMessage = encodeURIComponent(
    'Merhaba, özel hizmet teklifiniz ve detaylar hakkında bilgi almak istiyorum.'
  );
  const whatsappUrl = `https://wa.me/${contact?.whatsapp}?text=${whatsappMessage}`;

  return (
    <section id="special" className="py-20 md:py-28 bg-slate-50/70 dark:bg-zinc-950/70 border-y border-slate-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={specialSection.title || 'Özel Bölüm'}
          subtitle={specialSection.subtitle}
        />

        {/* 1. STEPS / PROCESS LAYOUT */}
        {specialSection.type === 'steps' && steps.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item: any, idx: number) => (
              <div
                key={idx}
                className="relative p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-md space-y-4 hover:border-brand-primary/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-brand-primary/40 font-mono">
                    {item.step || `0${idx + 1}`}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center">
                    <DynamicIcon name={item.iconName} className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* 2. BEFORE / AFTER SLIDER LAYOUT */}
        {specialSection.type === 'before_after' && beforeAfterItems.length > 0 && (
          <div className="space-y-12 max-w-4xl mx-auto">
            {beforeAfterItems.map((item: any) => (
              <BeforeAfterSlider
                key={item.id}
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        )}

        {/* 3. MENU LAYOUT (CAFE / RESTAURANT) */}
        {specialSection.type === 'menu' && menuItems.length > 0 && (
          <div className="space-y-8">
            {/* Category tabs */}
            {menuCategories.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-2">
                {menuCategories.map((cat: string) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                      activeCategory === cat
                        ? 'bg-brand-primary text-white shadow-md'
                        : 'bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-muted hover:text-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {menuItems
                .filter(
                  (item: any) =>
                    activeCategory === 'Tümü' || item.category === activeCategory
                )
                .map((item: any) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 flex items-start justify-between gap-4 shadow-sm"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-foreground">{item.name}</h4>
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted">{item.description}</p>
                    </div>
                    <span className="text-base font-extrabold text-brand-primary shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* 4. PACKAGES COMPARISON */}
        {specialSection.type === 'packages' && packages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg: any) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-zinc-900 border transition-all ${
                  pkg.recommended
                    ? 'border-brand-primary ring-2 ring-brand-primary/20 shadow-2xl scale-105 z-10'
                    : 'border-slate-200 dark:border-zinc-800 shadow-md'
                }`}
              >
                {pkg.recommended && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-brand-primary text-white shadow-md">
                    En Çok Tercih Edilen
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{pkg.name}</h4>
                    <p className="text-xs text-muted mt-1">{pkg.description}</p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-brand-primary">{pkg.price}</span>
                    {pkg.period && <span className="text-xs text-muted">{pkg.period}</span>}
                  </div>

                  <ul className="space-y-3 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs">
                    {(pkg.features || []).map((feat: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-foreground">
                        <Check className="w-4 h-4 text-brand-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold transition-all ${
                    pkg.recommended
                      ? 'bg-brand-primary hover:bg-brand-primary-hover text-white shadow-md'
                      : 'border border-slate-200 dark:border-zinc-700 text-foreground hover:bg-slate-50 dark:hover:bg-zinc-800'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{pkg.ctaText || 'Hemen Başlayın'}</span>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
