'use client';

import React from 'react';
import { useSiteStore } from '@/store/use-site-store';
import { Search, Globe, Share2 } from 'lucide-react';

export const SeoPanel: React.FC = () => {
  const { config, updateConfig } = useSiteStore();
  const { seo } = config;

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2 flex items-center gap-2">
          <Search className="w-4 h-4 text-brand-primary" />
          Arama Motoru Optimizasyonu (SEO)
        </h4>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-muted">SEO Başlığı (Title Tag)</label>
              <span className="text-[10px] text-muted">{seo.title.length} / 60 karakter</span>
            </div>
            <input
              type="text"
              value={seo.title}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.seo.title = e.target.value;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-muted">Meta Açıklaması (Meta Description)</label>
              <span className="text-[10px] text-muted">{seo.description.length} / 160 karakter</span>
            </div>
            <textarea
              rows={3}
              value={seo.description}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.seo.description = e.target.value;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-muted mb-1">Anahtar Kelimeler (Virgülle Ayrılmış)</label>
            <input
              type="text"
              value={seo.keywords.join(', ')}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.seo.keywords = e.target.value
                    .split(',')
                    .map((k) => k.trim())
                    .filter(Boolean);
                })
              }
              placeholder="hizmet, ürün, şehir, şirket"
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-muted mb-1 flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-brand-primary" />
              Domain Adı (Canonical URL)
            </label>
            <input
              type="text"
              value={seo.domain || ''}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.seo.domain = e.target.value;
                })
              }
              placeholder="https://isletmeniz.com"
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-muted mb-1 flex items-center gap-1">
              <Share2 className="w-3.5 h-3.5 text-brand-primary" />
              Sosyal Medya Kart Görseli (OG Image)
            </label>
            <input
              type="text"
              value={seo.ogImage || ''}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.seo.ogImage = e.target.value;
                })
              }
              placeholder="/assets/client/og-image.jpg"
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
