import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { SafeImage } from '../ui/SafeImage';
import { DynamicIcon } from '../ui/DynamicIcon';
import { Clock, MessageSquare, Tag } from 'lucide-react';
import { t } from '@/i18n/translations';

interface ServicesSectionProps {
  config: any;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ config }) => {
  const serviceItems = config.services?.items || config.services || [];
  const contact = config.contact || {};
  const features = config.features || {};
  const lang = config.language || 'tr';

  if (!serviceItems || serviceItems.length === 0) return null;

  const whatsappMessage = encodeURIComponent(
    lang === 'en'
      ? 'Hello, I would like to get information about your services.'
      : 'Merhaba, hizmetleriniz hakkında bilgi ve fiyat detayları almak istiyorum.'
  );
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${whatsappMessage}`;

  return (
    <section id="services" className="py-20 md:py-28 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={config.services?.badge || t('sections.servicesBadge', lang)}
          title={config.services?.title || t('sections.servicesTitle', lang)}
          subtitle={config.services?.subtitle || t('sections.servicesSubtitle', lang)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service: any) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-slate-50/70 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/60 overflow-hidden hover:shadow-xl hover:border-brand-primary/40 transition-all duration-300"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-200 dark:bg-zinc-800">
                  <SafeImage
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    placeholderLabel={service.title}
                    showDevBadge={features.showPlaceholderBadges}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent pointer-events-none" />

                  {/* Icon & Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    {service.category && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-zinc-900/90 text-slate-800 dark:text-slate-100 backdrop-blur-md shadow-xs flex items-center gap-1">
                        <Tag className="w-3 h-3 text-brand-primary" />
                        {service.category}
                      </span>
                    )}
                  </div>

                  {service.duration && (
                    <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-md flex items-center gap-1">
                      <Clock className="w-3 h-3 text-brand-primary" />
                      <span>{service.duration}</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center shrink-0">
                      <DynamicIcon name={service.iconName} className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground leading-snug group-hover:opacity-80 transition-opacity">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-6 pt-0 mt-2 border-t border-slate-200/50 dark:border-zinc-700/50 flex items-center justify-between gap-4">
                {service.price ? (
                  <div className="pt-3">
                    <span className="text-xs text-muted block">{lang === 'en' ? 'Price' : 'Fiyat'}</span>
                    <span className="text-base font-extrabold text-brand-primary">{service.price}</span>
                  </div>
                ) : (
                  <div />
                )}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-brand-primary hover:bg-brand-primary-hover text-[var(--color-on-primary)] shadow-xs transition-all hover:scale-105"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{t('ui.learnMore', lang)}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
