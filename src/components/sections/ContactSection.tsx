import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Phone, MessageSquare, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { formatPhoneLink, formatWhatsAppLink } from '@/lib/validation/phone';

interface ContactSectionProps {
  config: any;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
  const contact = config?.contact || {};
  const businessHours = contact.businessHours || config?.businessHours || [];
  const features = config?.features || {};

  const whatsappUrl = formatWhatsAppLink(
    contact.whatsapp,
    contact.whatsappDefaultMessage || 'Merhaba, web siteniz üzerinden randevu ve bilgi almak istiyorum.'
  );
  const phoneUrl = formatPhoneLink(contact.phone);

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="İletişim & Konum"
          title="Bizimle İletişime Geçin veya Ziyaret Edin"
          subtitle="Sorularınız, randevu talepleriniz veya bilgi almak için tek tıkla ulaşın."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Hours */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Action Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp Card */}
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors space-y-3 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/30 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">WhatsApp Destek</h4>
                    <p className="text-xs text-muted mt-1">Anında randevu & mesajlaşma</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Mesaj Gönder →
                  </span>
                </a>
              )}

              {/* Phone Call Card */}
              {phoneUrl && (
                <a
                  href={phoneUrl}
                  className="p-6 rounded-3xl bg-brand-light/50 border border-brand-primary/20 hover:border-brand-primary/40 transition-colors space-y-3 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center shadow-md shadow-brand-primary/30 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">Telefon İletişim</h4>
                    <p className="text-xs text-muted mt-1">{contact.phoneFormatted || contact.phone}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary">
                    Hemen Ara →
                  </span>
                </a>
              )}
            </div>

            {/* Address & Email Detail Card */}
            <div className="p-8 rounded-3xl bg-slate-50/70 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/60 space-y-6">
              {contact.address && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-foreground">Açık Adres</h4>
                    <p className="text-sm text-muted leading-relaxed">{contact.address}</p>
                    {contact.mapsUrl && (
                      <a
                        href={contact.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:underline pt-1"
                      >
                        <span>Google Haritalar&apos;da Aç</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              {contact.email && (
                <div className="flex items-start gap-4 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60">
                  <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-foreground">E-posta Adresi</h4>
                    <a href={`mailto:${contact.email}`} className="text-sm text-muted hover:text-foreground">
                      {contact.email}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Business Hours Breakdown */}
            {businessHours.length > 0 && (
              <div className="p-8 rounded-3xl bg-slate-50/70 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/60 space-y-4">
                <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-primary" />
                  Çalışma Saatleri
                </h4>
                <div className="space-y-2 text-xs">
                  {businessHours.map((hrs: any, index: number) => (
                    <div key={index} className="flex justify-between items-center py-1.5 border-b border-slate-200/50 dark:border-zinc-700/40">
                      <span className="font-medium text-foreground">{hrs.days}</span>
                      <span className={`font-semibold ${hrs.isOpen ? 'text-brand-primary' : 'text-rose-500'}`}>
                        {hrs.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Google Maps Embed / Directions */}
          <div className="lg:col-span-6 h-full">
            {features.showMap !== false && contact.mapsEmbedUrl ? (
              <div className="relative w-full h-[450px] lg:h-full min-h-[420px] rounded-3xl overflow-hidden border border-slate-200/80 dark:border-zinc-800 shadow-xl">
                <iframe
                  src={contact.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Harita Konumu"
                  className="w-full h-full"
                />
              </div>
            ) : contact.mapsUrl ? (
              <div className="p-12 rounded-3xl bg-slate-50/70 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/60 flex flex-col items-center justify-center text-center space-y-4 min-h-[350px]">
                <MapPin className="w-12 h-12 text-brand-primary" />
                <h4 className="text-lg font-bold text-foreground">Haritada Konumumuz</h4>
                <p className="text-sm text-muted max-w-md">{contact.address}</p>
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-brand-primary text-white shadow-md hover:bg-brand-primary-hover transition-all"
                >
                  <span>Google Haritalar&apos;da Yol Tarifi Al</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ) : null}
          </div>

        </div>
      </div>
    </section>
  );
};
