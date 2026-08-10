import React from 'react';
import { DynamicIcon } from '../ui/DynamicIcon';

interface TrustSectionProps {
  config: any;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ config }) => {
  const points = config?.trustPoints || [];
  if (!points || points.length === 0) return null;

  return (
    <section className="py-12 bg-white dark:bg-zinc-900 border-y border-slate-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt: any, idx: number) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/50 border border-slate-200/50 dark:border-zinc-700/40 hover:border-brand-primary/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center shrink-0 shadow-xs">
                <DynamicIcon name={pt.iconName} className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground">{pt.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{pt.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
