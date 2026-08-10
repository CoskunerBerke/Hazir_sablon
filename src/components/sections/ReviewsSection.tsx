import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Star, MapPin } from 'lucide-react';

interface ReviewsSectionProps {
  config: any;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ config }) => {
  const reviewItems = config.reviews?.items || config.reviews || [];

  if (!reviewItems || reviewItems.length === 0) return null;

  // Quadruple items to guarantee a 100% seamless, gapless river marquee flow
  const marqueeItems = [
    ...reviewItems,
    ...reviewItems,
    ...reviewItems,
    ...reviewItems,
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-slate-50/70 dark:bg-zinc-950/70 border-t border-slate-200/60 dark:border-zinc-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeader
          badge="Google Müşteri Yorumları"
          title="Bizi Tercih Edenlerin Gerçek Deneyimleri"
          subtitle="Google Haritalar üzerinden paylaşılan doğrulanmış danışan ve müşteri geri bildirimleri."
        />
      </div>

      {/* Slow Left-to-Right Continuous River Marquee Stream (Never stops on mouse hover) */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Soft Blur Faders */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee">
          {marqueeItems.map((rev: any, index: number) => {
            const initials = (rev.name || 'M')
              .split(' ')
              .filter(Boolean)
              .map((n: string) => n[0])
              .join('')
              .toUpperCase()
              .slice(0, 2) || 'M';

            return (
              <div
                key={`${rev.id}-${index}`}
                className="w-[320px] sm:w-[380px] shrink-0 flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-md space-y-4 hover:shadow-xl hover:border-brand-primary/40 transition-all"
              >
                <div className="space-y-3">
                  {/* Top Google Badge & Star Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: rev.rating || 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                      <MapPin className="w-3 h-3 text-red-500" />
                      <span>{rev.source || 'Google'}</span>
                    </span>
                  </div>

                  {/* Comment Text */}
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed italic line-clamp-3">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-brand-light text-brand-primary font-extrabold text-xs flex items-center justify-center border border-brand-primary/20 shrink-0">
                      {initials}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-foreground">{rev.name}</h4>
                      <p className="text-[10px] text-muted">{rev.role || 'Google Kullanıcısı'}</p>
                    </div>
                  </div>

                  {rev.date && (
                    <span className="text-[10px] text-muted font-medium">
                      {rev.date}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
