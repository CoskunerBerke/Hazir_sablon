'use client';

import React, { useState } from 'react';
import { useSiteStore } from '@/store/use-site-store';
import { ArrowUp, ArrowDown, Eye, EyeOff, Layout, GripVertical } from 'lucide-react';

const SECTION_NAMES: Record<string, string> = {
  hero: 'Hero (Giriş Manşeti)',
  trust: 'Güven Rozetleri',
  about: 'Hakkımızda',
  services: 'Hizmetler & Ürünler',
  special: 'İnteraktif Özel Bölüm',
  gallery: 'Galeri',
  reviews: 'Müşteri Yorumları',
  contact: 'İletişim & Harita',
};

export const SectionsPanel: React.FC = () => {
  const { config, reorderSections, toggleSectionVisibility, updateConfig, selectSectionAndTab } = useSiteStore();
  const { sectionOrder, sectionVisibility, hero, about, services, specialSection, gallery, reviews } = config;

  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);
  const [dragOverIdx, setDragOverIdx] = useState<number | null>(null);

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newOrder = [...sectionOrder];
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= newOrder.length) return;

    const temp = newOrder[index];
    newOrder[index] = newOrder[targetIdx];
    newOrder[targetIdx] = temp;
    reorderSections(newOrder);
  };

  const handleDragStart = (idx: number) => {
    setDraggedIdx(idx);
  };

  const handleDragOver = (e: React.DragEvent, idx: number) => {
    e.preventDefault();
    if (dragOverIdx !== idx) {
      setDragOverIdx(idx);
    }
  };

  const handleDrop = (idx: number) => {
    if (draggedIdx === null || draggedIdx === idx) {
      setDraggedIdx(null);
      setDragOverIdx(null);
      return;
    }

    const newOrder = [...sectionOrder];
    const [movedItem] = newOrder.splice(draggedIdx, 1);
    newOrder.splice(idx, 0, movedItem);

    reorderSections(newOrder);
    setDraggedIdx(null);
    setDragOverIdx(null);
  };

  return (
    <div className="space-y-6">
      {/* 1. Section Reordering and Visibility */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-700/60 pb-2">
          <h4 className="text-sm font-bold text-foreground">Bölüm Sıralaması ve Görünürlük</h4>
          <span className="text-[11px] font-semibold text-brand-primary">Sürükle & Bırak veya Oklarla Taşı</span>
        </div>

        <div className="space-y-2">
          {sectionOrder.map((sectionId, idx) => {
            const isVisible = sectionVisibility[sectionId] !== false;
            const name = SECTION_NAMES[sectionId] || sectionId;
            const isDragging = draggedIdx === idx;
            const isTarget = dragOverIdx === idx && draggedIdx !== idx;

            return (
              <div
                key={sectionId}
                draggable
                onDragStart={() => handleDragStart(idx)}
                onDragOver={(e) => handleDragOver(e, idx)}
                onDrop={() => handleDrop(idx)}
                onDragEnd={() => {
                  setDraggedIdx(null);
                  setDragOverIdx(null);
                }}
                className={`p-3 rounded-xl border flex items-center justify-between transition-all select-none cursor-move ${
                  isDragging
                    ? 'opacity-40 border-dashed border-brand-primary bg-brand-light/20 scale-[0.98]'
                    : isTarget
                    ? 'border-2 border-brand-primary bg-brand-light/30 shadow-md ring-2 ring-brand-primary/20'
                    : isVisible
                    ? 'bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-xs hover:border-brand-primary/40'
                    : 'bg-slate-100 dark:bg-zinc-800/20 border-dashed border-slate-300 dark:border-zinc-700 opacity-60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {/* Drag Handle Icon for Mouse & Touch / iPad Stylus */}
                  <div className="p-1 text-slate-400 hover:text-brand-primary cursor-grab active:cursor-grabbing touch-none">
                    <GripVertical className="w-4 h-4" />
                  </div>

                  {/* Up / Down Arrow Buttons */}
                  <div className="flex flex-col gap-0.5">
                    <button
                      disabled={idx === 0}
                      onClick={(e) => {
                        e.stopPropagation();
                        moveSection(idx, 'up');
                      }}
                      className="p-0.5 text-slate-400 hover:text-foreground disabled:opacity-20"
                      title="Yukarı Taşı"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      disabled={idx === sectionOrder.length - 1}
                      onClick={(e) => {
                        e.stopPropagation();
                        moveSection(idx, 'down');
                      }}
                      className="p-0.5 text-slate-400 hover:text-foreground disabled:opacity-20"
                      title="Aşağı Taşı"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span
                    onClick={() => selectSectionAndTab(sectionId)}
                    className="text-xs font-bold text-foreground cursor-pointer hover:text-brand-primary transition-colors"
                  >
                    {name}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSectionVisibility(sectionId);
                    }}
                    className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                      isVisible
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'bg-rose-500/10 text-rose-500'
                    }`}
                    title={isVisible ? 'Bölümü Gizle' : 'Bölümü Göster'}
                  >
                    {isVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Layout Variant Controls */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2 flex items-center gap-2">
          <Layout className="w-4 h-4 text-brand-primary" />
          Bölüm Düzen Seçenekleri (Layout Variations)
        </h4>

        <div className="space-y-4">
          {/* Hero Layout */}
          <div>
            <label className="block text-xs font-bold text-muted mb-1.5">Hero Düzen Varyasyonu</label>
            <select
              value={hero.layoutVariant}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.hero.layoutVariant = e.target.value as any;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            >
              <option value="text_left_image_right">Metin Solda, Görsel Sağda</option>
              <option value="image_left_text_right">Görsel Solda, Metin Sağda</option>
              <option value="full_background">Tam Ekran Arka Plan Görseli</option>
              <option value="centered_minimal">Ortalanmış Minimal Metin</option>
              <option value="editorial_split">Editorial Asimetrik Düzen</option>
            </select>
          </div>

          {/* About Layout */}
          <div>
            <label className="block text-xs font-bold text-muted mb-1.5">Hakkımızda Düzen Varyasyonu</label>
            <select
              value={about.layoutVariant}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.about.layoutVariant = e.target.value as any;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            >
              <option value="image_left">Görsel Solda</option>
              <option value="image_right">Görsel Sağda</option>
              <option value="centered">Ortalanmış Metin ve Görsel</option>
            </select>
          </div>

          {/* Services Style & Columns */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-bold text-muted mb-1.5">Hizmetler Kart Stili</label>
              <select
                value={services.layoutStyle}
                onChange={(e) =>
                  updateConfig((draft) => {
                    draft.services.layoutStyle = e.target.value as any;
                  })
                }
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              >
                <option value="grid">Grid Kartlar</option>
                <option value="cards">Gölgeli Kartlar</option>
                <option value="list">Yatay Liste</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-muted mb-1.5">Kolon Sayısı</label>
              <select
                value={services.columns}
                onChange={(e) =>
                  updateConfig((draft) => {
                    draft.services.columns = parseInt(e.target.value);
                  })
                }
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              >
                <option value={2}>2 Kolon</option>
                <option value={3}>3 Kolon</option>
                <option value={4}>4 Kolon</option>
              </select>
            </div>
          </div>

          {/* Special Section Mode */}
          <div>
            <label className="block text-xs font-bold text-muted mb-1.5">İnteraktif Özel Bölüm Türü</label>
            <select
              value={specialSection.type}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.specialSection.type = e.target.value as any;
                })
              }
              className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            >
              <option value="steps">Süreç Adımları (01, 02, 03, 04)</option>
              <option value="menu">Dinamik Kategori Sekmeli Menü (Kafe/Restoran)</option>
              <option value="before_after">Önce / Sonra Slider (Oto Detailing/Estetik)</option>
              <option value="packages">Paket Karşılaştırma Tablosu (Ajans/Danışmanlık)</option>
              <option value="faq">Sıkça Sorulan Sorular (FAQ)</option>
            </select>
          </div>

          {/* Gallery Layout */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-bold text-muted mb-1.5">Galeri Stili</label>
              <select
                value={gallery.gridStyle}
                onChange={(e) =>
                  updateConfig((draft) => {
                    draft.gallery.gridStyle = e.target.value as any;
                  })
                }
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              >
                <option value="equal">Eşit Grid</option>
                <option value="masonry">Masonry / Editorial</option>
                <option value="slider">Yatay Slider</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-muted mb-1.5">Yorum Görünümü</label>
              <select
                value={reviews.layoutStyle}
                onChange={(e) =>
                  updateConfig((draft) => {
                    draft.reviews.layoutStyle = e.target.value as any;
                  })
                }
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              >
                <option value="cards">Kart Grid</option>
                <option value="marquee">Akan Marquee</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
