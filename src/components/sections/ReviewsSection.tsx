import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Star, Quote } from 'lucide-react';

interface ReviewsSectionProps {
  config: any;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ config }) => {
  const reviewItems = config.reviews?.items || config.reviews || [];
  const features = config.features || {};

  if (!reviewItems || reviewItems.length === 0) return null;

  return (
    <section id="reviews" className="py-20 md:py-28 bg-slate-50/60 dark:bg-zinc-950/60 border-t border-slate-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Danışan Yorumları"
          title="Bizi Tercih Edenlerin Gerçek Deneyimleri"
          subtitle="Google Haritalar ve sosyal medya üzerinden paylaşılan doğrulanmış danışan geri bildirimleri."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewItems.map((rev: any) => {
            const initials = (rev.name || 'M')
              .split(' ')
              .filter(Boolean)
              .map((n: string) => n[0])
              .join('')
              .toUpperCase()
              .slice(0, 2) || 'M';

            return (
              <div
                key={rev.id}
                className="relative flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-md space-y-6 hover:shadow-xl transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: rev.rating || 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-brand-primary/20" />
                  </div>

                  <p className="text-sm text-foreground/90 italic leading-relaxed">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-light text-brand-primary font-bold text-sm flex items-center justify-center border border-brand-primary/20">
                      {initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{rev.name}</h4>
                      {rev.role && <p className="text-xs text-muted">{rev.role}</p>}
                    </div>
                  </div>

                  {rev.source && (
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-muted">
                      {rev.source}
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
