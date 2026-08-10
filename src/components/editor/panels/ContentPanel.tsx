'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSiteStore } from '@/store/use-site-store';
import { Plus, Trash2, ChevronDown, ChevronUp, Sparkles, ShieldCheck, Award, Zap } from 'lucide-react';

export const ContentPanel: React.FC = () => {
  const { config, updateConfig, selectedSection } = useSiteStore();
  const { business, about, hero, trustPoints = [], services, specialSection, reviews } = config;

  const [expandedSection, setExpandedSection] = useState<string>('hero');

  // Auto expand and scroll to section when selected from preview iframe
  useEffect(() => {
    if (selectedSection) {
      setExpandedSection(selectedSection);
    }
  }, [selectedSection]);

  const toggleAccordion = (id: string) => {
    setExpandedSection(expandedSection === id ? '' : id);
  };

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

  // Trust Points
  const handleTrustChange = (index: number, field: string, val: string) => {
    updateConfig((draft) => {
      if (!draft.trustPoints) draft.trustPoints = [];
      (draft.trustPoints[index] as any)[field] = val;
    });
  };

  const handleAddTrust = () => {
    updateConfig((draft) => {
      if (!draft.trustPoints) draft.trustPoints = [];
      draft.trustPoints.push({
        title: 'Yeni Güven Rozeti',
        description: 'Güven rozeti açıklaması buraya yazılır.',
        iconName: 'ShieldCheck',
      });
    });
  };

  const handleRemoveTrust = (index: number) => {
    updateConfig((draft) => {
      if (draft.trustPoints) draft.trustPoints.splice(index, 1);
    });
  };

  // Services
  const handleServiceChange = (index: number, field: string, val: string) => {
    updateConfig((draft) => {
      (draft.services.items[index] as any)[field] = val;
    });
  };

  const handleAddService = () => {
    updateConfig((draft) => {
      draft.services.items.push({
        id: `service-${Date.now()}`,
        title: 'Yeni Hizmet veya Ürün',
        description: 'Hizmetiniz hakkında kısa açıklama buraya gelecek.',
        price: '₺750',
        duration: '45 Dk',
        category: 'Standart',
        image: '',
        iconName: 'Sparkles',
        buttonText: 'Bilgi Al',
      });
    });
  };

  const handleRemoveService = (index: number) => {
    updateConfig((draft) => {
      draft.services.items.splice(index, 1);
    });
  };

  // Reviews
  const handleReviewChange = (index: number, field: string, val: any) => {
    updateConfig((draft) => {
      if (!draft.reviews.items) draft.reviews.items = [];
      (draft.reviews.items[index] as any)[field] = val;
    });
  };

  const handleAddReview = () => {
    updateConfig((draft) => {
      if (!draft.reviews.items) draft.reviews.items = [];
      draft.reviews.items.push({
        id: `rev-${Date.now()}`,
        name: 'Müşteri Adı Soyadı',
        role: 'Google Haritalar Yorumu',
        comment: 'Hizmetten son derece memnun kaldım, herkese tavsiye ederim.',
        rating: 5,
        date: 'Yeni',
        source: 'Google Haritalar',
      });
    });
  };

  const handleRemoveReview = (index: number) => {
    updateConfig((draft) => {
      if (draft.reviews.items) draft.reviews.items.splice(index, 1);
    });
  };

  return (
    <div className="space-y-4">
      {/* 1. Marka ve İşletme Kimliği */}
      <div className="rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 overflow-hidden">
        <button
          onClick={() => toggleAccordion('brand')}
          className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-foreground bg-white dark:bg-zinc-900"
        >
          <span>1. Marka ve İşletme Kimliği</span>
          {expandedSection === 'brand' ? <ChevronUp className="w-4 h-4 text-brand-primary" /> : <ChevronDown className="w-4 h-4 text-muted" />}
        </button>

        {expandedSection === 'brand' && (
          <div className="p-4 border-t border-slate-200 dark:border-zinc-800 space-y-3">
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
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
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
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
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
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
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
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>
          </div>
        )}
      </div>

      {/* 2. Hero (Giriş) Metinleri */}
      <div id="editor-section-hero" className="rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 overflow-hidden">
        <button
          onClick={() => toggleAccordion('hero')}
          className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-foreground bg-white dark:bg-zinc-900"
        >
          <span>2. Hero (Giriş Manşeti) İçerikleri</span>
          {expandedSection === 'hero' ? <ChevronUp className="w-4 h-4 text-brand-primary" /> : <ChevronDown className="w-4 h-4 text-muted" />}
        </button>

        {expandedSection === 'hero' && (
          <div className="p-4 border-t border-slate-200 dark:border-zinc-800 space-y-3">
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
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
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
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground resize-none"
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
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground resize-none"
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
                  className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
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
                  className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. Güven Rozetleri */}
      <div id="editor-section-trust" className="rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 overflow-hidden">
        <button
          onClick={() => toggleAccordion('trust')}
          className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-foreground bg-white dark:bg-zinc-900"
        >
          <span>3. Güven Rozetleri</span>
          {expandedSection === 'trust' ? <ChevronUp className="w-4 h-4 text-brand-primary" /> : <ChevronDown className="w-4 h-4 text-muted" />}
        </button>

        {expandedSection === 'trust' && (
          <div className="p-4 border-t border-slate-200 dark:border-zinc-800 space-y-3">
            {trustPoints.map((tp: any, idx: number) => (
              <div key={idx} className="p-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 space-y-2 relative">
                <button
                  onClick={() => handleRemoveTrust(idx)}
                  className="absolute top-2 right-2 p-1 text-rose-500 hover:bg-rose-50 rounded-lg"
                  title="Sil"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <div>
                  <label className="block text-[11px] font-bold text-muted mb-0.5">Rozet Başlığı</label>
                  <input
                    type="text"
                    value={tp.title}
                    onChange={(e) => handleTrustChange(idx, 'title', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-muted mb-0.5">Açıklama</label>
                  <input
                    type="text"
                    value={tp.description}
                    onChange={(e) => handleTrustChange(idx, 'description', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={handleAddTrust}
              className="w-full py-2 rounded-xl border border-dashed border-brand-primary text-brand-primary font-bold text-xs hover:bg-brand-light/30 transition-colors flex items-center justify-center gap-1"
            >
              <Plus className="w-4 h-4" />
              <span>Yeni Güven Rozeti Ekle</span>
            </button>
          </div>
        )}
      </div>

      {/* 4. Hakkımızda */}
      <div id="editor-section-about" className="rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 overflow-hidden">
        <button
          onClick={() => toggleAccordion('about')}
          className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-foreground bg-white dark:bg-zinc-900"
        >
          <span>4. Hakkımızda İçeriği</span>
          {expandedSection === 'about' ? <ChevronUp className="w-4 h-4 text-brand-primary" /> : <ChevronDown className="w-4 h-4 text-muted" />}
        </button>

        {expandedSection === 'about' && (
          <div className="p-4 border-t border-slate-200 dark:border-zinc-800 space-y-3">
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
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
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
        )}
      </div>

      {/* 5. Hizmetler ve Fiyatlar */}
      <div id="editor-section-services" className="rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 overflow-hidden">
        <button
          onClick={() => toggleAccordion('services')}
          className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-foreground bg-white dark:bg-zinc-900"
        >
          <span>5. Hizmetler & Ürünler Listesi</span>
          {expandedSection === 'services' ? <ChevronUp className="w-4 h-4 text-brand-primary" /> : <ChevronDown className="w-4 h-4 text-muted" />}
        </button>

        {expandedSection === 'services' && (
          <div className="p-4 border-t border-slate-200 dark:border-zinc-800 space-y-3">
            {services.items.map((item: any, idx: number) => (
              <div key={item.id || idx} className="p-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 space-y-2 relative">
                <button
                  onClick={() => handleRemoveService(idx)}
                  className="absolute top-2 right-2 p-1 text-rose-500 hover:bg-rose-50 rounded-lg"
                  title="Hizmeti Sil"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>

                <div>
                  <label className="block text-[11px] font-bold text-muted mb-0.5">Hizmet Adı</label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => handleServiceChange(idx, 'title', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold text-muted mb-0.5">Fiyat</label>
                    <input
                      type="text"
                      value={item.price}
                      onChange={(e) => handleServiceChange(idx, 'price', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-muted mb-0.5">Kategori / Süre</label>
                    <input
                      type="text"
                      value={item.category || item.duration || ''}
                      onChange={(e) => handleServiceChange(idx, 'category', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-muted mb-0.5">Açıklama</label>
                  <textarea
                    rows={2}
                    value={item.description}
                    onChange={(e) => handleServiceChange(idx, 'description', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground resize-none"
                  />
                </div>
              </div>
            ))}

            <button
              onClick={handleAddService}
              className="w-full py-2 rounded-xl border border-dashed border-brand-primary text-brand-primary font-bold text-xs hover:bg-brand-light/30 transition-colors flex items-center justify-center gap-1"
            >
              <Plus className="w-4 h-4" />
              <span>Yeni Hizmet veya Ürün Ekle</span>
            </button>
          </div>
        )}
      </div>

      {/* 6. Google Müşteri Yorumları */}
      <div id="editor-section-reviews" className="rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 overflow-hidden">
        <button
          onClick={() => toggleAccordion('reviews')}
          className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-foreground bg-white dark:bg-zinc-900"
        >
          <span>6. Google Müşteri Yorumları</span>
          {expandedSection === 'reviews' ? <ChevronUp className="w-4 h-4 text-brand-primary" /> : <ChevronDown className="w-4 h-4 text-muted" />}
        </button>

        {expandedSection === 'reviews' && (
          <div className="p-4 border-t border-slate-200 dark:border-zinc-800 space-y-3">
            {(reviews.items || []).map((rev: any, idx: number) => (
              <div key={rev.id || idx} className="p-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 space-y-2 relative">
                <button
                  onClick={() => handleRemoveReview(idx)}
                  className="absolute top-2 right-2 p-1 text-rose-500 hover:bg-rose-50 rounded-lg"
                  title="Yorumu Sil"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold text-muted mb-0.5">Müşteri Adı</label>
                    <input
                      type="text"
                      value={rev.name}
                      onChange={(e) => handleReviewChange(idx, 'name', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-muted mb-0.5">Unvan / Yıldız</label>
                    <input
                      type="text"
                      value={rev.role || 'Müşteri'}
                      onChange={(e) => handleReviewChange(idx, 'role', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-muted mb-0.5">Yorum Metni</label>
                  <textarea
                    rows={2}
                    value={rev.comment}
                    onChange={(e) => handleReviewChange(idx, 'comment', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground resize-none"
                  />
                </div>
              </div>
            ))}

            <button
              onClick={handleAddReview}
              className="w-full py-2 rounded-xl border border-dashed border-brand-primary text-brand-primary font-bold text-xs hover:bg-brand-light/30 transition-colors flex items-center justify-center gap-1"
            >
              <Plus className="w-4 h-4" />
              <span>Yeni Yorum Ekle</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
