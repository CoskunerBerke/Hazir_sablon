'use client';

import React, { useEffect, useState } from 'react';
import { useSiteStore } from '@/store/use-site-store';
import { extractContent, getEffectiveConfig } from '@/lib/i18n';
import { LanguageCode } from '@/types/site-config';
import { Plus, Trash2, ChevronDown, ChevronUp, Globe } from 'lucide-react';

export const ContentPanel: React.FC = () => {
  const { config, updateConfig, selectedSection, setLanguage } = useSiteStore();
  const [editingLang, setEditingLang] = useState<LanguageCode>(config.language || 'tr');
  const [expandedSection, setExpandedSection] = useState<string>('hero');

  // Keep editingLang synchronized with site store language
  useEffect(() => {
    if (config.language && config.language !== editingLang) {
      setEditingLang(config.language);
    }
  }, [config.language]);

  // Auto expand section when selected from preview frame
  useEffect(() => {
    if (selectedSection) {
      setExpandedSection(selectedSection);
    }
  }, [selectedSection]);

  const handleSelectLanguage = (lang: LanguageCode) => {
    setEditingLang(lang);
    setLanguage(lang);
  };

  const toggleAccordion = (id: string) => {
    setExpandedSection(expandedSection === id ? '' : id);
  };

  // Get active localized content object for currently selected editing language
  const content = (config as any).i18nContent?.[editingLang] || extractContent(config, editingLang);

  // Helper to mutate i18nContent for editingLang safely
  const updateContent = (updater: (c: any) => void) => {
    updateConfig((draft) => {
      if (!(draft as any).i18nContent) {
        (draft as any).i18nContent = {
          tr: extractContent(draft, 'tr'),
          en: extractContent(draft, 'en'),
        };
      }
      updater((draft as any).i18nContent[editingLang]);

      // Sync effective config for editing language
      const eff = getEffectiveConfig(draft, editingLang);
      Object.assign(draft, eff);
    });
  };

  return (
    <div className="space-y-4">
      {/* Language Switcher Tabs for Content Panel */}
      <div className="p-1.5 rounded-2xl bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 flex items-center gap-2">
        <button
          onClick={() => handleSelectLanguage('tr')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
            editingLang === 'tr'
              ? 'bg-white dark:bg-zinc-900 text-brand-primary shadow-xs border border-slate-200 dark:border-zinc-700'
              : 'text-muted hover:text-foreground'
          }`}
        >
          <span>🇹🇷 Türkçe İçerik</span>
        </button>
        <button
          onClick={() => handleSelectLanguage('en')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
            editingLang === 'en'
              ? 'bg-white dark:bg-zinc-900 text-brand-primary shadow-xs border border-slate-200 dark:border-zinc-700'
              : 'text-muted hover:text-foreground'
          }`}
        >
          <span>🇬🇧 English Content</span>
        </button>
      </div>

      <div className="px-1 text-[11px] font-semibold text-muted flex items-center gap-1.5">
        <Globe className="w-3.5 h-3.5 text-brand-primary" />
        <span>Düzenlenen İçerik Dili: <strong>{editingLang === 'tr' ? 'Türkçe (TR)' : 'English (EN)'}</strong></span>
      </div>

      {/* 1. Marka ve İşletme Kimliği */}
      <div className="rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 overflow-hidden">
        <button
          onClick={() => toggleAccordion('brand')}
          className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-foreground bg-white dark:bg-zinc-900"
        >
          <span>1. Marka ve İşletme Kimliği ({editingLang.toUpperCase()})</span>
          {expandedSection === 'brand' ? <ChevronUp className="w-4 h-4 text-brand-primary" /> : <ChevronDown className="w-4 h-4 text-muted" />}
        </button>

        {expandedSection === 'brand' && (
          <div className="p-4 border-t border-slate-200 dark:border-zinc-800 space-y-3">
            <div>
              <label className="block text-xs font-bold text-muted mb-1">İşletme Adı (Business Name)</label>
              <input
                type="text"
                value={content.business?.name || ''}
                onChange={(e) => updateContent((c) => { c.business.name = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-muted mb-1">Kısa Marka Adı (Short Brand Name)</label>
              <input
                type="text"
                value={content.business?.shortName || ''}
                onChange={(e) => updateContent((c) => { c.business.shortName = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-muted mb-1">Sektör / Kategori (Industry)</label>
              <input
                type="text"
                value={content.business?.industry || ''}
                onChange={(e) => updateContent((c) => { c.business.industry = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-muted mb-1">Kısa Slogan (Tagline)</label>
              <input
                type="text"
                value={content.business?.tagline || ''}
                onChange={(e) => updateContent((c) => { c.business.tagline = e.target.value; })}
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
          <span>2. Hero (Giriş Manşeti) İçerikleri ({editingLang.toUpperCase()})</span>
          {expandedSection === 'hero' ? <ChevronUp className="w-4 h-4 text-brand-primary" /> : <ChevronDown className="w-4 h-4 text-muted" />}
        </button>

        {expandedSection === 'hero' && (
          <div className="p-4 border-t border-slate-200 dark:border-zinc-800 space-y-3">
            <div>
              <label className="block text-xs font-bold text-muted mb-1">Üst Rozet Metni (Badge)</label>
              <input
                type="text"
                value={content.hero?.badge || ''}
                onChange={(e) => updateContent((c) => { c.hero.badge = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-muted mb-1">Ana Başlık (Title)</label>
              <textarea
                rows={2}
                value={content.hero?.title || ''}
                onChange={(e) => updateContent((c) => { c.hero.title = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-muted mb-1">Açıklama Paragrafı (Description)</label>
              <textarea
                rows={3}
                value={content.hero?.description || ''}
                onChange={(e) => updateContent((c) => { c.hero.description = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-bold text-muted mb-1">1. Buton Metni</label>
                <input
                  type="text"
                  value={content.hero?.primaryCtaText || ''}
                  onChange={(e) => updateContent((c) => { c.hero.primaryCtaText = e.target.value; })}
                  className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted mb-1">2. Buton Metni</label>
                <input
                  type="text"
                  value={content.hero?.secondaryCtaText || ''}
                  onChange={(e) => updateContent((c) => { c.hero.secondaryCtaText = e.target.value; })}
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
          <span>3. Güven Rozetleri ({editingLang.toUpperCase()})</span>
          {expandedSection === 'trust' ? <ChevronUp className="w-4 h-4 text-brand-primary" /> : <ChevronDown className="w-4 h-4 text-muted" />}
        </button>

        {expandedSection === 'trust' && (
          <div className="p-4 border-t border-slate-200 dark:border-zinc-800 space-y-3">
            {(content.trustPoints || []).map((tp: any, idx: number) => (
              <div key={idx} className="p-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 space-y-2 relative">
                <button
                  onClick={() => updateContent((c) => { c.trustPoints.splice(idx, 1); })}
                  className="absolute top-2 right-2 p-1 text-rose-500 hover:bg-rose-50 rounded-lg"
                  title="Sil"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <div>
                  <label className="block text-[11px] font-bold text-muted mb-0.5">Rozet Başlığı</label>
                  <input
                    type="text"
                    value={tp.title || ''}
                    onChange={(e) => updateContent((c) => { c.trustPoints[idx].title = e.target.value; })}
                    className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-muted mb-0.5">Açıklama</label>
                  <input
                    type="text"
                    value={tp.description || ''}
                    onChange={(e) => updateContent((c) => { c.trustPoints[idx].description = e.target.value; })}
                    className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={() => updateContent((c) => { c.trustPoints.push({ title: editingLang === 'en' ? 'New Trust Point' : 'Yeni Güven Rozeti', description: editingLang === 'en' ? 'Description here' : 'Rozet açıklaması', iconName: 'ShieldCheck' }); })}
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
          <span>4. Hakkımızda İçeriği ({editingLang.toUpperCase()})</span>
          {expandedSection === 'about' ? <ChevronUp className="w-4 h-4 text-brand-primary" /> : <ChevronDown className="w-4 h-4 text-muted" />}
        </button>

        {expandedSection === 'about' && (
          <div className="p-4 border-t border-slate-200 dark:border-zinc-800 space-y-3">
            <div>
              <label className="block text-xs font-bold text-muted mb-1">Rozet Metni (Badge)</label>
              <input
                type="text"
                value={content.about?.badge || ''}
                onChange={(e) => updateContent((c) => { c.about.badge = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-muted mb-1">Hakkımızda Başlığı (Title)</label>
              <input
                type="text"
                value={content.about?.title || ''}
                onChange={(e) => updateContent((c) => { c.about.title = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-muted mb-1">Alt Başlık (Subtitle)</label>
              <input
                type="text"
                value={content.about?.subtitle || ''}
                onChange={(e) => updateContent((c) => { c.about.subtitle = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>

            {/* About Paragraphs */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-muted">Paragraflar</label>
              {(content.about?.text || []).map((p: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2">
                  <textarea
                    rows={2}
                    value={p}
                    onChange={(e) => updateContent((c) => { c.about.text[idx] = e.target.value; })}
                    className="w-full p-2.5 rounded-xl text-xs border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground resize-none"
                  />
                  <button
                    onClick={() => updateContent((c) => { c.about.text.splice(idx, 1); })}
                    className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => updateContent((c) => { if (!c.about.text) c.about.text = []; c.about.text.push(editingLang === 'en' ? 'New paragraph text...' : 'Yeni paragraf metni...'); })}
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:underline pt-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Paragraf Ekle</span>
              </button>
            </div>

            {/* Highlights */}
            <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-zinc-700/60">
              <label className="block text-xs font-bold text-muted">Öne Çıkan Özellik Maddeleri</label>
              {(content.about?.highlights || []).map((h: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={h}
                    onChange={(e) => updateContent((c) => { c.about.highlights[idx] = e.target.value; })}
                    className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
                  />
                  <button
                    onClick={() => updateContent((c) => { c.about.highlights.splice(idx, 1); })}
                    className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => updateContent((c) => { if (!c.about.highlights) c.about.highlights = []; c.about.highlights.push(editingLang === 'en' ? 'New Highlight' : 'Yeni Öne Çıkan Özellik'); })}
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
          <span>5. Hizmetler & Ürünler Listesi ({editingLang.toUpperCase()})</span>
          {expandedSection === 'services' ? <ChevronUp className="w-4 h-4 text-brand-primary" /> : <ChevronDown className="w-4 h-4 text-muted" />}
        </button>

        {expandedSection === 'services' && (
          <div className="p-4 border-t border-slate-200 dark:border-zinc-800 space-y-3">
            <div>
              <label className="block text-xs font-bold text-muted mb-1">Bölüm Rozeti</label>
              <input
                type="text"
                value={content.services?.badge || ''}
                onChange={(e) => updateContent((c) => { c.services.badge = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-muted mb-1">Bölüm Başlığı</label>
              <input
                type="text"
                value={content.services?.title || ''}
                onChange={(e) => updateContent((c) => { c.services.title = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-muted mb-1">Bölüm Açıklaması</label>
              <input
                type="text"
                value={content.services?.subtitle || ''}
                onChange={(e) => updateContent((c) => { c.services.subtitle = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>

            <div className="pt-2 border-t border-slate-200/60 dark:border-zinc-700/60 space-y-3">
              {(content.services?.items || []).map((item: any, idx: number) => (
                <div key={item.id || idx} className="p-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 space-y-2 relative">
                  <button
                    onClick={() => updateContent((c) => { c.services.items.splice(idx, 1); })}
                    className="absolute top-2 right-2 p-1 text-rose-500 hover:bg-rose-50 rounded-lg"
                    title="Hizmeti Sil"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div>
                    <label className="block text-[11px] font-bold text-muted mb-0.5">Hizmet Adı</label>
                    <input
                      type="text"
                      value={item.title || ''}
                      onChange={(e) => updateContent((c) => { c.services.items[idx].title = e.target.value; })}
                      className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-muted mb-0.5">Fiyat</label>
                      <input
                        type="text"
                        value={item.price || ''}
                        onChange={(e) => updateContent((c) => { c.services.items[idx].price = e.target.value; })}
                        className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-muted mb-0.5">Kategori</label>
                      <input
                        type="text"
                        value={item.category || ''}
                        onChange={(e) => updateContent((c) => { c.services.items[idx].category = e.target.value; })}
                        className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-muted mb-0.5">Buton Yazısı</label>
                      <input
                        type="text"
                        value={item.buttonText || ''}
                        onChange={(e) => updateContent((c) => { c.services.items[idx].buttonText = e.target.value; })}
                        className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-muted mb-0.5">Açıklama</label>
                    <textarea
                      rows={2}
                      value={item.description || ''}
                      onChange={(e) => updateContent((c) => { c.services.items[idx].description = e.target.value; })}
                      className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground resize-none"
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={() => updateContent((c) => {
                  if (!c.services.items) c.services.items = [];
                  c.services.items.push({
                    id: `srv-${Date.now()}`,
                    title: editingLang === 'en' ? 'New Service' : 'Yeni Hizmet',
                    description: editingLang === 'en' ? 'Service description...' : 'Hizmet açıklaması...',
                    price: editingLang === 'en' ? '$50' : '₺500',
                    category: editingLang === 'en' ? 'Standard' : 'Standart',
                    buttonText: editingLang === 'en' ? 'Learn More' : 'Bilgi Al',
                  });
                })}
                className="w-full py-2 rounded-xl border border-dashed border-brand-primary text-brand-primary font-bold text-xs hover:bg-brand-light/30 transition-colors flex items-center justify-center gap-1"
              >
                <Plus className="w-4 h-4" />
                <span>Yeni Hizmet veya Ürün Ekle</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 6. Süreç & Özel Bölüm */}
      <div id="editor-section-special" className="rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 overflow-hidden">
        <button
          onClick={() => toggleAccordion('special')}
          className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-foreground bg-white dark:bg-zinc-900"
        >
          <span>6. Süreç ve Adımlar ({editingLang.toUpperCase()})</span>
          {expandedSection === 'special' ? <ChevronUp className="w-4 h-4 text-brand-primary" /> : <ChevronDown className="w-4 h-4 text-muted" />}
        </button>

        {expandedSection === 'special' && (
          <div className="p-4 border-t border-slate-200 dark:border-zinc-800 space-y-3">
            <div>
              <label className="block text-xs font-bold text-muted mb-1">Bölüm Rozeti</label>
              <input
                type="text"
                value={content.specialSection?.badge || ''}
                onChange={(e) => updateContent((c) => { c.specialSection.badge = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-muted mb-1">Süreç Başlığı</label>
              <input
                type="text"
                value={content.specialSection?.title || ''}
                onChange={(e) => updateContent((c) => { c.specialSection.title = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-muted mb-1">Süreç Açıklaması</label>
              <input
                type="text"
                value={content.specialSection?.subtitle || ''}
                onChange={(e) => updateContent((c) => { c.specialSection.subtitle = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>

            {(content.specialSection?.steps || []).map((step: any, idx: number) => (
              <div key={idx} className="p-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 space-y-2 relative">
                <div>
                  <label className="block text-[11px] font-bold text-muted mb-0.5">Adım {step.step || idx + 1} Başlığı</label>
                  <input
                    type="text"
                    value={step.title || ''}
                    onChange={(e) => updateContent((c) => { c.specialSection.steps[idx].title = e.target.value; })}
                    className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-muted mb-0.5">Adım Açıklaması</label>
                  <input
                    type="text"
                    value={step.description || ''}
                    onChange={(e) => updateContent((c) => { c.specialSection.steps[idx].description = e.target.value; })}
                    className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 7. Google Müşteri Yorumları */}
      <div id="editor-section-reviews" className="rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 overflow-hidden">
        <button
          onClick={() => toggleAccordion('reviews')}
          className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-foreground bg-white dark:bg-zinc-900"
        >
          <span>7. Google Müşteri Yorumları ({editingLang.toUpperCase()})</span>
          {expandedSection === 'reviews' ? <ChevronUp className="w-4 h-4 text-brand-primary" /> : <ChevronDown className="w-4 h-4 text-muted" />}
        </button>

        {expandedSection === 'reviews' && (
          <div className="p-4 border-t border-slate-200 dark:border-zinc-800 space-y-3">
            <div>
              <label className="block text-xs font-bold text-muted mb-1">Bölüm Rozeti</label>
              <input
                type="text"
                value={content.reviews?.badge || ''}
                onChange={(e) => updateContent((c) => { c.reviews.badge = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-muted mb-1">Bölüm Başlığı</label>
              <input
                type="text"
                value={content.reviews?.title || ''}
                onChange={(e) => updateContent((c) => { c.reviews.title = e.target.value; })}
                className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
            </div>

            {(content.reviews?.items || []).map((rev: any, idx: number) => (
              <div key={rev.id || idx} className="p-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 space-y-2 relative">
                <button
                  onClick={() => updateContent((c) => { c.reviews.items.splice(idx, 1); })}
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
                      value={rev.name || ''}
                      onChange={(e) => updateContent((c) => { c.reviews.items[idx].name = e.target.value; })}
                      className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-muted mb-0.5">Unvan / Rol</label>
                    <input
                      type="text"
                      value={rev.role || ''}
                      onChange={(e) => updateContent((c) => { c.reviews.items[idx].role = e.target.value; })}
                      className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-muted mb-0.5">Yorum Metni</label>
                  <textarea
                    rows={2}
                    value={rev.comment || ''}
                    onChange={(e) => updateContent((c) => { c.reviews.items[idx].comment = e.target.value; })}
                    className="w-full px-2.5 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-foreground resize-none"
                  />
                </div>
              </div>
            ))}

            <button
              onClick={() => updateContent((c) => {
                if (!c.reviews.items) c.reviews.items = [];
                c.reviews.items.push({
                  id: `rev-${Date.now()}`,
                  name: editingLang === 'en' ? 'Client Name' : 'Müşteri Adı',
                  role: editingLang === 'en' ? 'Verified Client' : 'Doğrulanmış Müşteri',
                  comment: editingLang === 'en' ? 'Great experience!' : 'Harika bir deneyimdi!',
                  source: 'Google Maps',
                });
              })}
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
