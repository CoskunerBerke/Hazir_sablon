'use client';

import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { formatPhoneLink, formatWhatsAppLink } from '@/lib/validation/phone';
import { t } from '@/i18n/translations';

interface FloatingCTAProps {
  config: any;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ config }) => {
  const showWhatsappFeature = config.features?.showFloatingWhatsapp !== false;
  const lang = config?.language || 'tr';

  const whatsappUrl = formatWhatsAppLink(
    config.contact?.whatsapp,
    config.contact?.whatsappDefaultMessage || (lang === 'en' ? 'Hello, I would like to get information.' : 'Merhaba, web siteniz üzerinden bilgi almak istiyorum.')
  );
  const phoneUrl = formatPhoneLink(config.contact?.phone);

  if (!showWhatsappFeature && !phoneUrl) return null;

  return (
    <div className="md:hidden fixed bottom-5 right-5 z-40 flex flex-col gap-3 items-end">
      {/* Phone Call Float */}
      {phoneUrl && (
        <a
          href={phoneUrl}
          className="w-12 h-12 rounded-full bg-slate-900 text-white shadow-xl flex items-center justify-center border border-slate-700 active:scale-95 transition-transform"
          aria-label={t('ui.callUs', lang)}
        >
          <Phone className="w-5 h-5 text-brand-primary" />
        </a>
      )}

      {/* WhatsApp Float Button - rendered ONLY if whatsappUrl is valid */}
      {showWhatsappFeature && whatsappUrl && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-2xl shadow-emerald-600/40 active:scale-95 transition-all animate-bounce hover:animate-none"
          aria-label={t('ui.whatsappUs', lang)}
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="pr-1">{lang === 'en' ? 'WhatsApp Chat' : 'WhatsApp Danışma'}</span>
        </a>
      )}
    </div>
  );
};
