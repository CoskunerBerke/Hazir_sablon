import React from 'react';
import { SafeImage } from '../ui/SafeImage';
import { MessageSquare, ArrowRight, ShieldCheck, Star } from 'lucide-react';

interface HeroSectionProps {
  config: any;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config }) => {
  const hero = config?.hero || {};
  const contact = config?.contact || {};
  const features = config?.features || {};

  const primaryCta = hero.primaryCta || { text: 'Bize Ulaşın', href: '#contact', type: 'whatsapp' };
  const secondaryCta = hero.secondaryCta;

  const whatsappUrl = `https://wa.me/${contact.whatsapp || ''}?text=${encodeURIComponent(
    contact.whatsappDefaultMessage || 'Merhaba, randevu ve bilgi almak istiyorum.'
  )}`;

  const primaryHref = primaryCta.type === 'whatsapp' ? whatsappUrl : primaryCta.href || '#contact';

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {hero.badge && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-brand-light text-brand-primary border border-brand-primary/20 shadow-xs">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>{hero.badge}</span>
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight">
              {hero.title || config?.business?.tagline || 'İşletmenizi Tanıtın'}
            </h1>

            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {hero.description || config?.business?.description || ''}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={primaryHref}
                target={primaryCta.type === 'whatsapp' ? '_blank' : undefined}
                rel={primaryCta.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-brand-primary hover:bg-brand-primary-hover text-white shadow-xl shadow-brand-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {primaryCta.type === 'whatsapp' && <MessageSquare className="w-5 h-5 fill-current" />}
                <span>{primaryCta.text}</span>
              </a>

              {secondaryCta && secondaryCta.text && (
                <a
                  href={secondaryCta.href || '#services'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold border border-slate-300 dark:border-zinc-700 text-foreground hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <span>{secondaryCta.text}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Micro Trust Badge underneath */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-zinc-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-muted">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-primary" />
                <span>Hijyen & Kalite Garantisi</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Randevu Hattı Açık</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 blur-xl opacity-70" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <SafeImage
                  src={hero.image}
                  alt={hero.title || 'Hero Görseli'}
                  fill
                  priority
                  className="object-cover"
                  placeholderLabel="Hero Görseli"
                  showDevBadge={features.showPlaceholderBadges}
                />

                {/* Floating Card Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-white/40 dark:border-zinc-700/50 shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      {config?.shortName || config?.business?.shortName || config?.business?.name || 'İşletmeniz'}
                    </h4>
                    <p className="text-xs text-muted">
                      {config?.industry || config?.business?.industry || 'Genel Hizmetler'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
