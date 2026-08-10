'use client';

import React, { useState } from 'react';
import { useSiteStore } from '@/store/use-site-store';
import { compressImageFile, saveImageToDB } from '@/lib/storage/indexed-db';
import { Image as ImageIcon, Upload, Trash2, Plus } from 'lucide-react';

export const MediaPanel: React.FC = () => {
  const { config, updateConfig } = useSiteStore();
  const { brand, hero, about, gallery, services } = config;
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
        category: 'Galeri',
        image: '', // EMPTY creation - no stock photo
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
          Logo ve Marka Görselleri
        </h4>

        {/* Logo Uploader */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-muted">İşletme Logosu</label>
          <div className="flex items-center gap-3">
            {brand.logo ? (
              <div className="relative w-24 h-14 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 p-1 flex items-center justify-center overflow-hidden">
                <img src={brand.logo} alt="Logo" className="max-h-full max-w-full object-contain" />
              </div>
            ) : (
              <div className="w-24 h-14 rounded-xl border-2 border-dashed border-slate-300 dark:border-zinc-700 flex flex-col items-center justify-center text-[10px] font-bold text-slate-500 p-1 text-center">
                <span>Logo Yok</span>
              </div>
            )}

            <label className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs font-bold text-foreground hover:bg-slate-50 dark:hover:bg-zinc-800 cursor-pointer inline-flex items-center gap-2 shadow-xs min-h-[44px]">
              <Upload className="w-4 h-4 text-brand-primary" />
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
                className="px-3 py-2 text-rose-500 hover:bg-rose-50 rounded-xl text-xs font-semibold"
              >
                Kaldır
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. Ana Sayfa Fotoğrafları */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2">
          Ana Sayfa Fotoğrafları
        </h4>

        {/* Hero Photo */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-muted">Hero (Manşet) Görseli</label>
          <div className="flex items-center gap-3">
            <div className="relative w-28 h-18 rounded-xl bg-slate-100 dark:bg-zinc-900 overflow-hidden border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
              {hero.image ? (
                <img src={hero.image} alt="Hero" className="w-full h-full object-cover" />
              ) : (
                <div className="text-[10px] font-bold text-slate-400 text-center p-1">Görsel Yükleyin</div>
              )}
            </div>

            <label className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs font-bold text-foreground hover:bg-slate-50 dark:hover:bg-zinc-800 cursor-pointer inline-flex items-center gap-2 shadow-xs min-h-[44px]">
              <Upload className="w-4 h-4 text-brand-primary" />
              <span>{hero.image ? 'Fotoğrafı Değiştir' : 'Fotoğrafınızı Yükleyin'}</span>
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

            {hero.image && (
              <button
                onClick={() =>
                  updateConfig((draft) => {
                    draft.hero.image = '';
                  })
                }
                className="p-2 text-rose-500 hover:bg-rose-50 rounded-xl"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* About Photo */}
        <div className="space-y-2 pt-3 border-t border-slate-200/60 dark:border-zinc-700/60">
          <label className="block text-xs font-bold text-muted">Hakkımızda Görseli</label>
          <div className="flex items-center gap-3">
            <div className="relative w-28 h-18 rounded-xl bg-slate-100 dark:bg-zinc-900 overflow-hidden border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
              {about.image ? (
                <img src={about.image} alt="About" className="w-full h-full object-cover" />
              ) : (
                <div className="text-[10px] font-bold text-slate-400 text-center p-1">Görsel Yükleyin</div>
              )}
            </div>

            <label className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs font-bold text-foreground hover:bg-slate-50 dark:hover:bg-zinc-800 cursor-pointer inline-flex items-center gap-2 shadow-xs min-h-[44px]">
              <Upload className="w-4 h-4 text-brand-primary" />
              <span>{about.image ? 'Fotoğrafı Değiştir' : 'Fotoğrafınızı Yükleyin'}</span>
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

            {about.image && (
              <button
                onClick={() =>
                  updateConfig((draft) => {
                    draft.about.image = '';
                  })
                }
                className="p-2 text-rose-500 hover:bg-rose-50 rounded-xl"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. Hizmet Fotoğrafları */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2">
          Hizmet Fotoğrafları
        </h4>

        <div className="space-y-3">
          {services.items.map((svc, idx) => (
            <div
              key={svc.id}
              className="p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-lg bg-slate-100 dark:bg-zinc-800 overflow-hidden shrink-0 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                  {svc.image ? (
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[9px] text-muted text-center leading-tight">Görsel Yok</span>
                  )}
                </div>
                <div className="space-y-0.5">
                  <h5 className="text-xs font-bold text-foreground truncate max-w-[160px]">{svc.title}</h5>
                  <p className="text-[10px] text-muted">{svc.category || 'Hizmet'}</p>
                </div>
              </div>

              <label className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-[11px] font-bold text-foreground hover:bg-slate-100 cursor-pointer inline-flex items-center gap-1">
                <Upload className="w-3.5 h-3.5 text-brand-primary" />
                <span>{svc.image ? 'Yenile' : 'Fotoğraf Yükle'}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleImageUpload(e, (url) => {
                      updateConfig((draft) => {
                        draft.services.items[idx].image = url;
                      });
                    })
                  }
                  className="hidden"
                />
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Galeri Fotoğrafları */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-700/60 pb-2">
          <h4 className="text-sm font-bold text-foreground">Galeri Görselleri</h4>
          <button
            onClick={handleAddGalleryImage}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-brand-primary text-white shadow-xs hover:bg-brand-primary-hover transition-colors min-h-[36px]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Yeni Galeri Kartı Ekle</span>
          </button>
        </div>

        <div className="space-y-3">
          {gallery.items.map((item, idx) => (
            <div
              key={item.id}
              className="p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-lg bg-slate-100 dark:bg-zinc-800 overflow-hidden shrink-0 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                  {item.image ? (
                    <img src={item.image} alt={item.title || ''} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[9px] text-muted text-center leading-tight">Görsel Yok</span>
                  )}
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
                <label className="p-2 text-slate-400 hover:text-brand-primary cursor-pointer" title="Fotoğraf Yükle">
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
                  title="Görseli Sil"
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
