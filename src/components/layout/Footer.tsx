import React from 'react';
import { BusinessConfig } from '@/types/business';
import { Instagram, Facebook, Twitter, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  config: BusinessConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight">{config.businessName}</h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {config.description}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {config.socialLinks.instagram && (
                <a
                  href={config.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-brand-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {config.socialLinks.facebook && (
                <a
                  href={config.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-brand-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {config.socialLinks.twitter && (
                <a
                  href={config.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-brand-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {config.socialLinks.linkedin && (
                <a
                  href={config.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-brand-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {config.socialLinks.googleMaps && (
                <a
                  href={config.socialLinks.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-brand-primary transition-colors"
                  aria-label="Google Maps"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Hızlı Bağlantılar</h4>
            <ul className="space-y-2.5 text-sm">
              {config.navigation.map((nav) => (
                <li key={nav.href}>
                  <a href={nav.href} className="hover:text-white transition-colors">
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Business Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-primary" />
              Çalışma Saatleri
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {config.businessHours.map((hours, idx) => (
                <li key={idx} className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span>{hours.days}</span>
                  <span className={`font-semibold ${hours.isOpen ? 'text-slate-200' : 'text-rose-400'}`}>
                    {hours.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">İletişim</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {config.contact.phone && (
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                  <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors">
                    {config.contact.phoneFormatted || config.contact.phone}
                  </a>
                </li>
              )}
              {config.contact.email && (
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                  <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors break-all">
                    {config.contact.email}
                  </a>
                </li>
              )}
              {config.contact.address && (
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                  <span>{config.contact.address}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} {config.businessName}. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-slate-300 transition-colors">Gizlilik & Çerez Politikası</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
