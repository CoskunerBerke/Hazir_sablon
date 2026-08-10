'use client';

import React, { useState } from 'react';
import { useSiteStore } from '@/store/use-site-store';
import { SECTOR_PRESETS, applySectorPreset } from '@/config/sector-presets';
import { STYLE_PRESETS } from '@/config/style-presets';
import { StylePresetId } from '@/types/site-config';
import { DynamicIcon } from '../ui/DynamicIcon';
import { compressImageFile, saveImageToDB } from '@/lib/storage/indexed-db';
import {
  cleanPhoneNumber,
  validatePhoneNumber,
  validateWhatsAppNumber,
} from '@/lib/validation/phone';
import { Sparkles, ArrowRight, ArrowLeft, Check, Upload, AlertCircle } from 'lucide-react';

export const SetupWizard: React.FC = () => {
  const { config, updateConfig } = useSiteStore();
  const [step, setStep] = useState(1);

  const [businessName, setBusinessName] = useState(config.business.name || '');
  const [shortName, setShortName] = useState(config.business.shortName || '');
  const [selectedSector, setSelectedSector] = useState(SECTOR_PRESETS[0].id);
  const [logoUrl, setLogoUrl] = useState(config.brand.logo || '');
  const [primaryColor, setPrimaryColor] = useState(config.theme.colors.primary || '#3B82F6');
  const [selectedPreset, setSelectedPreset] = useState<StylePresetId>(config.theme.preset || 'minimal');
  const [phone, setPhone] = useState(config.contact.phone || '');
  const [whatsapp, setWhatsapp] = useState(config.contact.whatsapp || '');

  const phoneValidation = validatePhoneNumber(phone);
  const whatsappValidation = validateWhatsAppNumber(whatsapp);
  const isStep6Valid = phoneValidation.isValid && whatsappValidation.isValid;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(cleanPhoneNumber(e.target.value));
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhatsapp(cleanPhoneNumber(e.target.value));
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const compressed = await compressImageFile(file, 800, 800, 0.9);
      const key = `logo_${Date.now()}`;
      await saveImageToDB(key, compressed);
      setLogoUrl(compressed);
    } catch (err) {
      console.error('Logo upload error:', err);
    }
  };

  const handleFinish = () => {
    if (!isStep6Valid) return;

    updateConfig((draft) => {
      // 1. Apply sector preset (populates industry, tagline, sample services)
      applySectorPreset(draft, selectedSector);

      // 2. Explicitly apply the user's chosen style preset FROM STEP 5
      const presetDef = STYLE_PRESETS.find((p) => p.id === selectedPreset);
      if (presetDef) {
        draft.theme.preset = selectedPreset;
        if (presetDef.themeDefaults.colors) {
          draft.theme.colors = { ...draft.theme.colors, ...presetDef.themeDefaults.colors };
        }
        if (presetDef.themeDefaults.typography) {
          draft.theme.typography = { ...draft.theme.typography, ...presetDef.themeDefaults.typography };
        }
        if (presetDef.themeDefaults.appearance) {
          draft.theme.appearance = { ...draft.theme.appearance, ...presetDef.themeDefaults.appearance };
        }
      }

      // 3. Override primary color with user's explicit selection FROM STEP 4
      if (primaryColor) {
        draft.theme.colors.primary = primaryColor;
      }

      // 4. Set wizard completion and business info
      draft.isWizardCompleted = true;
      if (businessName.trim()) draft.business.name = businessName;
      if (shortName.trim()) draft.business.shortName = shortName;
      if (logoUrl) draft.brand.logo = logoUrl;
      draft.contact.phone = phone;
      draft.contact.phoneFormatted = phone;
      draft.contact.whatsapp = whatsapp;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-fadeIn">
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-zinc-800 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-8 pt-8 pb-4 border-b border-slate-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-brand-primary text-[var(--color-on-primary)] flex items-center justify-center font-extrabold text-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Web Site Sihirbazı</h3>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-muted">
            Adım {step} / 6
          </span>
        </div>

        {/* Wizard Step Content */}
        <div className="p-8 flex-1 overflow-y-auto max-h-[70vh] space-y-6">
          {/* STEP 1: Business Name */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="text-2xl font-extrabold text-foreground">İşletmenizin Adı Nedir?</h4>
                <p className="text-sm text-muted">Web sitenizde ve başlık alanlarında görünecek resmi işletme adı.</p>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                    Tam İşletme Adı
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Örn: Kuzey Danışmanlık & Mimarlık"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/50 text-foreground font-semibold focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                    Kısa Marka Adı (Menü & Logo için)
                  </label>
                  <input
                    type="text"
                    value={shortName}
                    onChange={(e) => setShortName(e.target.value)}
                    placeholder="Örn: Kuzey Mimarlık"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/50 text-foreground font-semibold focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Sector Choice */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="text-2xl font-extrabold text-foreground">Hangi Sektörde Hizmet Veriyorsunuz?</h4>
                <p className="text-sm text-muted">Sektör seçimi sitenize uygun örnek hizmetleri ve bölüm yapısını önerir.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {SECTOR_PRESETS.map((sec) => {
                  const isSelected = selectedSector === sec.id;
                  return (
                    <div
                      key={sec.id}
                      onClick={() => setSelectedSector(sec.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'border-brand-primary bg-brand-light/30 ring-2 ring-brand-primary/20 shadow-md'
                          : 'border-slate-200 dark:border-zinc-800 hover:border-brand-primary/40'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                        <DynamicIcon name={sec.iconName} className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-foreground">{sec.name}</h5>
                        <p className="text-xs text-muted leading-tight mt-0.5">{sec.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Logo Upload */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="text-2xl font-extrabold text-foreground">Logonuz Var Mı?</h4>
                <p className="text-sm text-muted">Logonuzu yükleyebilirsiniz veya şimdilik atlayıp otomatik Monogram logosu kullanabilirsiniz.</p>
              </div>

              <div className="pt-4 flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-300 dark:border-zinc-700 rounded-3xl bg-slate-50/50 dark:bg-zinc-800/40 text-center">
                {logoUrl ? (
                  <div className="space-y-4">
                    <img src={logoUrl} alt="Logo Önizleme" className="h-16 object-contain mx-auto" />
                    <button
                      onClick={() => setLogoUrl('')}
                      className="text-xs text-rose-500 font-semibold hover:underline"
                    >
                      Görseli Kaldır
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer space-y-3">
                    <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mx-auto">
                      <Upload className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-brand-primary">Logo Fotoğrafı Seçin</span>
                      <p className="text-xs text-muted mt-1">PNG, JPG, SVG veya WebP (Max 5MB)</p>
                    </div>
                    <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                  </label>
                )}
              </div>
            </div>
          )}

          {/* STEP 4: Color Choice */}
          {step === 4 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="text-2xl font-extrabold text-foreground">Ana Marka Renginizi Seçin</h4>
                <p className="text-sm text-muted">Butonlar, bağlantılar ve vurgu alanları bu ana renkten türetilecektir.</p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                {['#3B82F6', '#7C3AED', '#D97706', '#0284C7', '#DC2626', '#059669', '#EC4899', '#0F172A'].map((color) => (
                  <button
                    key={color}
                    onClick={() => setPrimaryColor(color)}
                    className={`w-12 h-12 rounded-2xl transition-transform flex items-center justify-center shadow-md ${
                      primaryColor === color ? 'scale-110 ring-4 ring-slate-400 dark:ring-slate-600' : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: color }}
                  >
                    {primaryColor === color && <Check className="w-5 h-5 text-white" />}
                  </button>
                ))}
              </div>

              <div className="pt-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Özel HEX Rengi</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-12 h-12 rounded-xl cursor-pointer border border-slate-300 dark:border-zinc-700 p-1"
                  />
                  <input
                    type="text"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="px-4 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800 text-foreground font-mono text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Style Preset */}
          {step === 5 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="text-2xl font-extrabold text-foreground">Tasarım Stilinizi Seçin</h4>
                <p className="text-sm text-muted">Köşe yapısı, tipografi ve kart hissiyatını tek tıkla özelleştirin.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {STYLE_PRESETS.map((preset) => {
                  const isSelected = selectedPreset === preset.id;
                  return (
                    <div
                      key={preset.id}
                      onClick={() => setSelectedPreset(preset.id as StylePresetId)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'border-brand-primary bg-brand-light/30 ring-2 ring-brand-primary/20 shadow-md'
                          : 'border-slate-200 dark:border-zinc-800 hover:border-brand-primary/40'
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-xl shrink-0 shadow-xs"
                        style={{ backgroundColor: preset.previewColor }}
                      />
                      <div>
                        <h5 className="text-sm font-bold text-foreground">{preset.name}</h5>
                        <p className="text-xs text-muted leading-tight mt-0.5">{preset.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 6: Contact details */}
          {step === 6 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="space-y-1">
                <h4 className="text-2xl font-extrabold text-foreground">Müşterileriniz Size Nasıl Ulaşsın?</h4>
                <p className="text-sm text-muted">Telefon ve WhatsApp bilgilerinizi girerek doğrudan arama ve mesaj alabilirsiniz (İsteğe bağlı).</p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Phone input */}
                <div>
                  <label htmlFor="wizard-phone" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                    Telefon Numarası (Sadece rakam & +)
                  </label>
                  <input
                    id="wizard-phone"
                    type="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    aria-invalid={!phoneValidation.isValid}
                    aria-describedby={!phoneValidation.isValid ? 'w-phone-err' : undefined}
                    placeholder="Örn: +902125550011"
                    maxLength={16}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-zinc-800/50 text-foreground font-semibold focus:outline-none focus:ring-2 ${
                      !phoneValidation.isValid
                        ? 'border-rose-500 ring-1 ring-rose-500/30'
                        : 'border-slate-200 dark:border-zinc-800 focus:ring-brand-primary'
                    }`}
                  />
                  {!phoneValidation.isValid && phoneValidation.error && (
                    <p id="w-phone-err" className="text-xs font-semibold text-rose-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{phoneValidation.error}</span>
                    </p>
                  )}
                </div>

                {/* WhatsApp input */}
                <div>
                  <label htmlFor="wizard-whatsapp" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                    WhatsApp Numarası (Ülke Koduyla, 0 ile başlayamaz)
                  </label>
                  <input
                    id="wizard-whatsapp"
                    type="tel"
                    inputMode="tel"
                    value={whatsapp}
                    onChange={handleWhatsAppChange}
                    aria-invalid={!whatsappValidation.isValid}
                    aria-describedby={!whatsappValidation.isValid ? 'w-wa-err' : undefined}
                    placeholder="Örn: 905551234567"
                    maxLength={16}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-zinc-800/50 text-foreground font-semibold focus:outline-none focus:ring-2 ${
                      !whatsappValidation.isValid
                        ? 'border-rose-500 ring-1 ring-rose-500/30'
                        : 'border-slate-200 dark:border-zinc-800 focus:ring-brand-primary'
                    }`}
                  />
                  {!whatsappValidation.isValid && whatsappValidation.error && (
                    <p id="w-wa-err" className="text-xs font-semibold text-rose-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{whatsappValidation.error}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer controls */}
        <div className="px-8 py-4 bg-slate-50 dark:bg-zinc-950 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-muted hover:text-foreground hover:bg-slate-200/60 dark:hover:bg-zinc-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Geri</span>
            </button>
          ) : (
            <div />
          )}

          {step < 6 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-brand-primary text-[var(--color-on-primary)] hover:bg-brand-primary-hover shadow-md transition-all hover:scale-[1.02]"
            >
              <span>Devam Et</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              disabled={!isStep6Valid}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-extrabold bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:hover:bg-emerald-600 disabled:cursor-not-allowed text-white shadow-xl shadow-emerald-600/30 transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Sitemi Oluştur</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
