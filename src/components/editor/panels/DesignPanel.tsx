'use client';

import React from 'react';
import { useSiteStore } from '@/store/use-site-store';
import { STYLE_PRESETS } from '@/config/style-presets';
import { StylePresetId } from '@/types/site-config';
import { getContrastTextColor } from '@/lib/theme';
import { Palette, Type, Sliders } from 'lucide-react';

export const DesignPanel: React.FC = () => {
  const { config, updateConfig, applyStylePreset } = useSiteStore();
  const { theme } = config;
  const { colors, typography, appearance } = theme;

  const contrastText = getContrastTextColor(colors.primary);

  return (
    <div className="space-y-6">
      {/* 1. Style Presets Switcher */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2 flex items-center gap-2">
          <Palette className="w-4 h-4 text-brand-primary" />
          Hazır Stil Paketleri
        </h4>

        <div className="grid grid-cols-2 gap-2">
          {STYLE_PRESETS.map((preset) => {
            const isSelected = theme.preset === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => applyStylePreset(preset.id as StylePresetId)}
                className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                  isSelected
                    ? 'border-brand-primary bg-white dark:bg-zinc-900 ring-2 ring-brand-primary/20 shadow-xs'
                    : 'border-slate-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 hover:border-brand-primary/40'
                }`}
              >
                <div
                  className="w-5 h-5 rounded-lg shrink-0 shadow-xs"
                  style={{ backgroundColor: preset.previewColor }}
                />
                <span className="text-xs font-bold text-foreground truncate">{preset.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Color Palette & Contrast Check */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2">
          Renk Paleti ve Kontrast
        </h4>

        <div className="space-y-3">
          {/* Primary Color */}
          <div>
            <label className="block text-xs font-bold text-muted mb-1">Ana Marka Rengi (Primary)</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={colors.primary}
                onChange={(e) =>
                  updateConfig((draft) => {
                    draft.theme.colors.primary = e.target.value;
                  })
                }
                className="w-10 h-10 rounded-xl cursor-pointer border border-slate-300 dark:border-zinc-700 p-1"
              />
              <input
                type="text"
                value={colors.primary}
                onChange={(e) =>
                  updateConfig((draft) => {
                    draft.theme.colors.primary = e.target.value;
                  })
                }
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground font-mono text-xs w-32"
              />
              {/* Button Contrast Preview */}
              <div
                className="px-3 py-1.5 rounded-lg text-xs font-bold shadow-xs flex items-center gap-1"
                style={{ backgroundColor: colors.primary, color: contrastText }}
              >
                <span>Buton Yazısı</span>
              </div>
            </div>
          </div>

          {/* Secondary Color */}
          <div>
            <label className="block text-xs font-bold text-muted mb-1">İkincil Renk (Secondary)</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={colors.secondary}
                onChange={(e) =>
                  updateConfig((draft) => {
                    draft.theme.colors.secondary = e.target.value;
                  })
                }
                className="w-10 h-10 rounded-xl cursor-pointer border border-slate-300 dark:border-zinc-700 p-1"
              />
              <input
                type="text"
                value={colors.secondary}
                onChange={(e) =>
                  updateConfig((draft) => {
                    draft.theme.colors.secondary = e.target.value;
                  })
                }
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground font-mono text-xs w-32"
              />
            </div>
          </div>

          {/* Background Color */}
          <div>
            <label className="block text-xs font-bold text-muted mb-1">Sayfa Arka Plan Rengi</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={colors.background}
                onChange={(e) =>
                  updateConfig((draft) => {
                    draft.theme.colors.background = e.target.value;
                  })
                }
                className="w-10 h-10 rounded-xl cursor-pointer border border-slate-300 dark:border-zinc-700 p-1"
              />
              <input
                type="text"
                value={colors.background}
                onChange={(e) =>
                  updateConfig((draft) => {
                    draft.theme.colors.background = e.target.value;
                  })
                }
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground font-mono text-xs w-32"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Typography */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2 flex items-center gap-2">
          <Type className="w-4 h-4 text-brand-primary" />
          Tipografi ve Font Eşleşmeleri
        </h4>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-muted mb-1">Font Çifti Seçimi</label>
            <select
              value={typography.fontPair}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.theme.typography.fontPair = e.target.value as any;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            >
              <option value="modern">Outfit (Başlık) + Inter (Gövde)</option>
              <option value="editorial">Playfair Display (Başlık) + Inter (Gövde)</option>
              <option value="sans">Inter (Başlık & Gövde Minimal)</option>
              <option value="bold">Outfit Bold (Başlık & Gövde)</option>
            </select>
          </div>
        </div>
      </div>

      {/* 4. Appearance & Layout Controls */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2 flex items-center gap-2">
          <Sliders className="w-4 h-4 text-brand-primary" />
          Köşe, Buton ve Gölge Ayarları
        </h4>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-muted mb-1">Köşe Yuvarlaklığı</label>
            <select
              value={appearance.borderRadius}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.theme.appearance.borderRadius = e.target.value as any;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            >
              <option value="sharp">Keskin Kare (0px)</option>
              <option value="sm">Hafif Yuvarlak (4px)</option>
              <option value="md">Orta Yuvarlak (12px)</option>
              <option value="lg">Çok Yuvarlak (20px)</option>
              <option value="full">Tam Oval (Pill)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-muted mb-1">Buton Stili</label>
            <select
              value={appearance.buttonStyle}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.theme.appearance.buttonStyle = e.target.value as any;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            >
              <option value="solid">Dolu Renk (Solid)</option>
              <option value="pill">Tam Oval (Pill Button)</option>
              <option value="outline">Çerçeveli (Outline)</option>
              <option value="soft">Yumuşak Yüzey (Soft)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
