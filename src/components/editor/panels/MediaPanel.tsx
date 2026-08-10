'use client';

import React, { useState } from 'react';
import { useSiteStore } from '@/store/use-site-store';
import { compressImageFile, saveImageToDB } from '@/lib/storage/indexed-db';
import { Image as ImageIcon, Upload, Trash2, Plus, Move } from 'lucide-react';

export const MediaPanel: React.FC = () => {
  const { config, updateConfig } = useSiteStore();
  const { brand, hero, about, gallery } = config;
  const [uploadingTarget, setUploadingTarget] = useState<string | null>(null);

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    onSuccess: (dataUrl: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingTarget(e.target.name || 'image');
    try {
      const compressed = await compressImageFile(file, 1600, 1600, 0.85);
      const key = `img_${Date.now()}`;
      await saveImageToDB(key, compressed);
      onSuccess(compressed);
    } catch (err) {
      console.error('Image upload failed:', err);
    } finally {
      setUploadingTarget(null);
    }
  };

  const handleAddGalleryImage = () => {
    updateConfig((draft) => {
      draft.gallery.items.push({
        id: `gal-${Date.now()}`,
        title: 'Yeni Galeri Görseli',
        category: 'Ortam',
        image: '/assets/client/gallery-01.jpg',
        alt: 'Galeri Görseli',
      });
    });
  };

  const handleRemoveGalleryImage = (index: number) => {
    updateConfig((draft) => {
      draft.gallery.items.splice(index, 1);
    });
  };

  return (
    <div className="space-y-6">
      {/* 1. Logo ve Marka Görselleri */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2 flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-brand-primary" />
          Logo ve Favicon
        </h4>

        {/* Logo Uploader */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-muted">İşletme Logosu</label>
          <div className="flex items-center gap-3">
            {brand.logo ? (
              <div className="relative w-20 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 p-1 flex items-center justify-center overflow-hidden">
                <img src={brand.logo} alt="Logo" className="max-h-full max-w-full object-contain" />
              </div>
            ) : (
              <div className="w-20 h-12 rounded-xl bg-slate-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-mono">
                Logo Yok
              </div>
            )}

            <label className="px-3 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs font-bold text-foreground hover:bg-slate-50 dark:hover:bg-zinc-800 cursor-pointer inline-flex items-center gap-1.5 shadow-xs">
              <Upload className="w-3.5 h-3.5 text-brand-primary" />
              <span>{uploadingTarget === 'logo' ? 'Yükleniyor...' : 'Logo Yükle'}</span>
              <input
                type="file"
                name="logo"
                accept="image/*"
                onChange={(e) =>
                  handleImageUpload(e, (url) => {
                    updateConfig((draft) => {
                      draft.brand.logo = url;
                    });
                  })
                }
                className="hidden"
              />
            </label>

            {brand.logo && (
              <button
                onClick={() =>
                  updateConfig((draft) => {
                    draft.brand.logo = '';
                  })
                }
                className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg text-xs"
              >
                Kaldır
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. Hero ve Hakkımızda Fotoğrafları */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2">
          Ana Sayfa Fotoğrafları
        </h4>

        {/* Hero Photo */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-muted">Hero (Manşet) Görseli</label>
          <div className="flex items-center gap-3">
            <div className="relative w-24 h-16 rounded-xl bg-slate-200 dark:bg-zinc-800 overflow-hidden border border-slate-200 dark:border-zinc-700">
              {hero.image ? (
                <img src={hero.image} alt="Hero" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[10px] text-muted">Görsel Yok</div>
              )}
            </div>

            <label className="px-3 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs font-bold text-foreground hover:bg-slate-50 dark:hover:bg-zinc-800 cursor-pointer inline-flex items-center gap-1.5 shadow-xs">
              <Upload className="w-3.5 h-3.5 text-brand-primary" />
              <span>Görsel Değiştir</span>
              <input
                type="file"
                name="hero"
                accept="image/*"
                onChange={(e) =>
                  handleImageUpload(e, (url) => {
                    updateConfig((draft) => {
                      draft.hero.image = url;
                    });
                  })
                }
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* About Photo */}
        <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-zinc-700/60">
          <label className="block text-xs font-bold text-muted">Hakkımızda Görseli</label>
          <div className="flex items-center gap-3">
            <div className="relative w-24 h-16 rounded-xl bg-slate-200 dark:bg-zinc-800 overflow-hidden border border-slate-200 dark:border-zinc-700">
              {about.image ? (
                <img src={about.image} alt="About" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[10px] text-muted">Görsel Yok</div>
              )}
            </div>

            <label className="px-3 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs font-bold text-foreground hover:bg-slate-50 dark:hover:bg-zinc-800 cursor-pointer inline-flex items-center gap-1.5 shadow-xs">
              <Upload className="w-3.5 h-3.5 text-brand-primary" />
              <span>Görsel Değiştir</span>
              <input
                type="file"
                name="about"
                accept="image/*"
                onChange={(e) =>
                  handleImageUpload(e, (url) => {
                    updateConfig((draft) => {
                      draft.about.image = url;
                    });
                  })
                }
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      {/* 3. Galeri Fotoğrafları */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-700/60 pb-2">
          <h4 className="text-sm font-bold text-foreground">Galeri Görselleri</h4>
          <button
            onClick={handleAddGalleryImage}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-brand-primary text-white shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Fotoğraf Ekle</span>
          </button>
        </div>

        <div className="space-y-3">
          {gallery.items.map((item, idx) => (
            <div
              key={item.id}
              className="p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-lg bg-slate-200 dark:bg-zinc-800 overflow-hidden shrink-0">
                  <img src={item.image} alt={item.title || ''} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <input
                    type="text"
                    value={item.title || ''}
                    onChange={(e) =>
                      updateConfig((draft) => {
                        draft.gallery.items[idx].title = e.target.value;
                      })
                    }
                    placeholder="Görsel Başlığı"
                    className="text-xs font-bold text-foreground bg-transparent border-b border-slate-200 dark:border-zinc-700 focus:outline-none"
                  />
                  <input
                    type="text"
                    value={item.category || ''}
                    onChange={(e) =>
                      updateConfig((draft) => {
                        draft.gallery.items[idx].category = e.target.value;
                      })
                    }
                    placeholder="Kategori (Örn: Mekan)"
                    className="text-[10px] text-muted bg-transparent border-b border-slate-200 dark:border-zinc-700 focus:outline-none block"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <label className="p-2 text-slate-400 hover:text-brand-primary cursor-pointer">
                  <Upload className="w-4 h-4" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleImageUpload(e, (url) => {
                        updateConfig((draft) => {
                          draft.gallery.items[idx].image = url;
                        });
                      })
                    }
                    className="hidden"
                  />
                </label>
                <button
                  onClick={() => handleRemoveGalleryImage(idx)}
                  className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
