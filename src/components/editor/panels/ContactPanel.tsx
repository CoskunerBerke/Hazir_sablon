'use client';

import React from 'react';
import { useSiteStore } from '@/store/use-site-store';
import {
  cleanPhoneNumber,
  validatePhoneNumber,
  validateWhatsAppNumber,
} from '@/lib/validation/phone';
import { Phone, MessageSquare, Mail, MapPin, Clock, Share2, Plus, Trash2, AlertCircle } from 'lucide-react';

export const ContactPanel: React.FC = () => {
  const { config, updateConfig } = useSiteStore();
  const { contact, socialLinks } = config;

  const phoneValidation = validatePhoneNumber(contact.phone || '');
  const whatsappValidation = validateWhatsAppNumber(contact.whatsapp || '');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const cleaned = cleanPhoneNumber(raw);
    updateConfig((draft) => {
      draft.contact.phone = cleaned;
      draft.contact.phoneFormatted = cleaned;
    });
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const cleaned = cleanPhoneNumber(raw);
    updateConfig((draft) => {
      draft.contact.whatsapp = cleaned;
    });
  };

  const handleHoursChange = (index: number, field: 'days' | 'hours' | 'isOpen', value: any) => {
    updateConfig((draft) => {
      (draft.contact.businessHours[index] as any)[field] = value;
    });
  };

  const handleAddHours = () => {
    updateConfig((draft) => {
      draft.contact.businessHours.push({ days: 'Pazartesi - Cuma', hours: '09:00 - 18:00', isOpen: true });
    });
  };

  const handleRemoveHours = (index: number) => {
    updateConfig((draft) => {
      draft.contact.businessHours.splice(index, 1);
    });
  };

  return (
    <div className="space-y-6">
      {/* 1. İletişim Bilgileri */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2 flex items-center gap-2">
          <Phone className="w-4 h-4 text-brand-primary" />
          İletişim ve WhatsApp Bilgileri
        </h4>

        <div className="space-y-3">
          {/* Phone Field */}
          <div>
            <label htmlFor="input-phone" className="block text-xs font-bold text-muted mb-1">
              Telefon Numarası (Sadece rakam & +)
            </label>
            <input
              id="input-phone"
              type="tel"
              inputMode="tel"
              value={contact.phone || ''}
              onChange={handlePhoneChange}
              aria-invalid={!phoneValidation.isValid}
              aria-describedby={!phoneValidation.isValid ? 'phone-error' : undefined}
              placeholder="Örn: +902125550011"
              maxLength={16}
              className={`w-full px-3 py-2 rounded-xl text-sm font-medium border bg-white dark:bg-zinc-900 text-foreground transition-colors focus:outline-none focus:ring-2 ${
                !phoneValidation.isValid
                  ? 'border-rose-500 ring-1 ring-rose-500/30'
                  : 'border-slate-200 dark:border-zinc-700 focus:ring-brand-primary'
              }`}
            />
            {!phoneValidation.isValid && phoneValidation.error && (
              <p id="phone-error" className="text-[11px] font-semibold text-rose-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{phoneValidation.error}</span>
              </p>
            )}
          </div>

          {/* WhatsApp Field */}
          <div>
            <label htmlFor="input-whatsapp" className="block text-xs font-bold text-muted mb-1">
              WhatsApp Numarası (Ülke koduyla, 0 ile başlayamaz)
            </label>
            <input
              id="input-whatsapp"
              type="tel"
              inputMode="tel"
              value={contact.whatsapp || ''}
              onChange={handleWhatsAppChange}
              aria-invalid={!whatsappValidation.isValid}
              aria-describedby={!whatsappValidation.isValid ? 'whatsapp-error' : undefined}
              placeholder="Örn: 905551234567"
              maxLength={16}
              className={`w-full px-3 py-2 rounded-xl text-sm font-medium border bg-white dark:bg-zinc-900 text-foreground transition-colors focus:outline-none focus:ring-2 ${
                !whatsappValidation.isValid
                  ? 'border-rose-500 ring-1 ring-rose-500/30'
                  : 'border-slate-200 dark:border-zinc-700 focus:ring-brand-primary'
              }`}
            />
            {!whatsappValidation.isValid && whatsappValidation.error && (
              <p id="whatsapp-error" className="text-[11px] font-semibold text-rose-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{whatsappValidation.error}</span>
              </p>
            )}
          </div>

          {/* WhatsApp Default Message */}
          <div>
            <label className="block text-xs font-bold text-muted mb-1">Varsayılan WhatsApp Mesajı</label>
            <input
              type="text"
              value={contact.whatsappDefaultMessage || ''}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.contact.whatsappDefaultMessage = e.target.value;
                })
              }
              placeholder="Örn: Merhaba, bilgi almak istiyorum."
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xs font-bold text-muted mb-1">E-posta Adresi</label>
            <input
              type="email"
              value={contact.email || ''}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.contact.email = e.target.value;
                })
              }
              placeholder="Örn: info@isletmeniz.com"
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>
        </div>
      </div>

      {/* 2. Adres ve Harita Bilgileri */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-brand-primary" />
          Adres ve Google Maps
        </h4>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-muted mb-1">Açık Adres</label>
            <textarea
              rows={2}
              value={contact.address || ''}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.contact.address = e.target.value;
                })
              }
              placeholder="Açık adres bilgilerini buraya yazın..."
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-muted mb-1">Google Maps Harita Bağlantısı (Maps URL)</label>
            <input
              type="text"
              value={contact.mapsUrl || ''}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.contact.mapsUrl = e.target.value;
                })
              }
              placeholder="https://maps.google.com/..."
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-muted mb-1">Google Maps Embed Linki (iframe src)</label>
            <input
              type="text"
              value={contact.mapsEmbedUrl || ''}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.contact.mapsEmbedUrl = e.target.value;
                })
              }
              placeholder="https://www.google.com/maps/embed?pb=..."
              className="w-full px-3 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>
        </div>
      </div>

      {/* 3. Çalışma Saatleri */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-700/60 pb-2">
          <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-primary" />
            Çalışma Saatleri
          </h4>
          <button
            onClick={handleAddHours}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-brand-primary text-white shadow-xs hover:bg-brand-primary-hover min-h-[36px]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Gün Ekle</span>
          </button>
        </div>

        <div className="space-y-2">
          {(contact.businessHours || []).map((hrs, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <input
                type="text"
                value={hrs.days || ''}
                onChange={(e) => handleHoursChange(idx, 'days', e.target.value)}
                placeholder="Günler (Örn: Pazartesi - Cuma)"
                className="w-1/3 px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
              <input
                type="text"
                value={hrs.hours || ''}
                onChange={(e) => handleHoursChange(idx, 'hours', e.target.value)}
                placeholder="Saatler (Örn: 09:00 - 18:00)"
                className="w-1/3 px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
              />
              <button
                onClick={() => handleHoursChange(idx, 'isOpen', !hrs.isOpen)}
                className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${
                  hrs.isOpen
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-500'
                }`}
              >
                {hrs.isOpen ? 'Açık' : 'Kapalı'}
              </button>
              <button
                onClick={() => handleRemoveHours(idx)}
                className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Sosyal Medya */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <h4 className="text-sm font-bold text-foreground border-b border-slate-200/60 dark:border-zinc-700/60 pb-2 flex items-center gap-2">
          <Share2 className="w-4 h-4 text-brand-primary" />
          Sosyal Medya Bağlantıları
        </h4>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-muted mb-1">Instagram Linki</label>
            <input
              type="text"
              value={socialLinks.instagram || ''}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.socialLinks.instagram = e.target.value;
                })
              }
              placeholder="https://instagram.com/kullaniciadi"
              className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-muted mb-1">Facebook Linki</label>
            <input
              type="text"
              value={socialLinks.facebook || ''}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.socialLinks.facebook = e.target.value;
                })
              }
              placeholder="https://facebook.com/sayfa"
              className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-muted mb-1">TikTok Linki</label>
            <input
              type="text"
              value={socialLinks.tiktok || ''}
              onChange={(e) =>
                updateConfig((draft) => {
                  draft.socialLinks.tiktok = e.target.value;
                })
              }
              placeholder="https://tiktok.com/@kullaniciadi"
              className="w-full px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-foreground"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
