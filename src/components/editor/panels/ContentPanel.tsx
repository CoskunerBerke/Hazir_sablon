'use client';

import React from 'react';
import { useSiteStore } from '@/store/use-site-store';
import { Plus, Trash2 } from 'lucide-react';

export const ContentPanel: React.FC = () => {
  const { config, updateConfig } = useSiteStore();
  const { business, about, hero, features } = config;

  const handleHighlightChange = (index: number, val: string) => {
    updateConfig((draft) => {
      draft.about.highlights[index] = val;
    });
  };

  const handleAddHighlight = () => {
    updateConfig((draft) => {
      draft.about.highlights.push('Yeni Öne Çıkan Özellik');
    });
  };

  const handleRemoveHighlight = (index: number) => {
    updateConfig((draft) => {
      draft.about.highlights.splice(index, 1);
    });
  };

  const handleAboutParagraphChange = (index: number, val: string) => {
    updateConfig((draft) => {
      draft.about.text[index] = val;
    });
  };

  const handleAddAboutParagraph = () => {
    updateConfig((draft) => {
      draft.about.text.push('Hakkımızda için yeni paragraf metni.');
    });
  };

  const handleRemoveAboutParagraph = (index: number) => {
    updateConfig((draft) => {
      draft.about.text.splice(index, 1);
    });
  };

  return (
    <div className="space-y-6">
      {/* 1. Marka ve İşletme Kimliği */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2">
          Marka ve İşletme Kimliği
        </h4>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-muted mb-1">İşletme Adı (H1 & Başlıklar)</label>
            <input
              type="text"
              value={business.name}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.business.name = e.target.value;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-muted mb-1">Kısa Marka Adı (Logo & Menü)</label>
            <input
              type="text"
              value={business.shortName}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.business.shortName = e.target.value;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-muted mb-1">Sektör / Kategori</label>
            <input
              type="text"
              value={business.industry}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.business.industry = e.target.value;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-muted mb-1">Kısa Slogan (Tagline)</label>
            <input
              type="text"
              value={business.tagline}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.business.tagline = e.target.value;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-muted mb-1">Genel İşletme Açıklaması</label>
            <textarea
              rows={3}
              value={business.description}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.business.description = e.target.value;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground resize-none"
            />
          </div>
        </div>
      </div>

      {/* 2. Hero Başlık ve Metinleri */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2">
          Hero (Giriş) Metinleri
        </h4>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-muted mb-1">Üst Duyuru / Rozet Metni</label>
            <input
              type="text"
              value={hero.badge || ''}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.hero.badge = e.target.value;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-muted mb-1">Ana Başlık (H1)</label>
            <textarea
              rows={2}
              value={hero.title}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.hero.title = e.target.value;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-muted mb-1">Hero Açıklama Paragrafı</label>
            <textarea
              rows={3}
              value={hero.description}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.hero.description = e.target.value;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-bold text-muted mb-1">1. Buton Metni</label>
              <input
                type="text"
                value={hero.primaryCta.text}
                onChange={(e) =>
                  updateConfig((draft) => {
                    draft.hero.primaryCta.text = e.target.value;
                  })
                }
                className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-muted mb-1">2. Buton Metni</label>
              <input
                type="text"
                value={hero.secondaryCta?.text || ''}
                onChange={(e) =>
                  updateConfig((draft) => {
                    if (!draft.hero.secondaryCta) draft.hero.secondaryCta = { text: '', href: '#services' };
                    draft.hero.secondaryCta.text = e.target.value;
                  })
                }
                className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Hakkımızda İçeriği */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2">
          Hakkımızda Bölümü İçeriği
        </h4>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-muted mb-1">Hakkımızda Başlığı</label>
            <input
              type="text"
              value={about.title}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.about.title = e.target.value;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>

          {/* About Paragraphs */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-muted">Paragraflar</label>
            {about.text.map((p, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <textarea
                  rows={2}
                  value={p}
                  onChange={(e) => handleAboutParagraphChange(idx, e.target.value)}
                  className="w-full p-2.5 rounded-xl text-xs border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground resize-none"
                />
                <button
                  onClick={() => handleRemoveAboutParagraph(idx)}
                  className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            <button
              onClick={handleAddAboutParagraph}
              className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:underline pt-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Paragraf Ekle</span>
            </button>
          </div>

          {/* Highlights */}
          <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-zinc-700/60">
            <label className="block text-xs font-bold text-muted">Öne Çıkan Özellik Maddeleri</label>
            {about.highlights.map((h, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  type="text"
                  value={h}
                  onChange={(e) => handleHighlightChange(idx, e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
                />
                <button
                  onClick={() => handleRemoveHighlight(idx)}
                  className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            <button
              onClick={handleAddHighlight}
              className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:underline pt-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Özellik Maddesi Ekle</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
