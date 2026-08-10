'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { SafeImage } from '../ui/SafeImage';
import { formatPhoneLink, formatWhatsAppLink } from '@/lib/validation/phone';

interface HeaderProps {
  config: any;
  isEditorPreview?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ config, isEditorPreview = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scroll spy
      const navItems = config.navigation || [];
      const sections = navItems.map((nav: any) => nav.href.replace('#', ''));
      const current = sections.find((section: string) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [config.navigation]);

  const shortNameText = config.shortName || config.business?.shortName || config.businessName || 'İA';
  const monogram = shortNameText
    .split(' ')
    .filter(Boolean)
    .map((w: string) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'İA';

  const primaryCta = config.hero?.primaryCta || { text: 'İletişim', href: '#contact' };
  const logoSrc = config.logo || config.brand?.logo;

  const phoneLink = formatPhoneLink(config.contact?.phone);
  const waLink = formatWhatsAppLink(config.contact?.whatsapp, config.contact?.whatsappDefaultMessage);

  const finalCtaHref = primaryCta.type === 'whatsapp' ? (waLink || '#contact') : (primaryCta.href || '#contact');
  const isWaType = primaryCta.type === 'whatsapp' && !!waLink;

  const headerPositionStyle = isEditorPreview
    ? 'sticky top-0 z-20 w-full'
    : 'fixed top-0 left-0 right-0 z-40';

  return (
    <header
      className={`${headerPositionStyle} transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-md border-b border-slate-200/50 dark:border-zinc-800/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-lg p-1">
            {logoSrc ? (
              <div className="relative h-10 w-36 sm:w-44 flex items-center">
                <SafeImage
                  src={logoSrc}
                  alt={config.logoAlt || shortNameText}
                  fill
                  className="object-contain object-left"
                  placeholderLabel={shortNameText}
                  priority
                />
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center font-extrabold text-base tracking-wider shadow-md shadow-brand-primary/20 group-hover:scale-105 transition-transform">
                  {monogram}
                </div>
                <span className="font-bold text-lg text-foreground tracking-tight group-hover:text-brand-primary transition-colors">
                  {shortNameText}
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/60 dark:bg-zinc-900/60 backdrop-blur-md p-1.5 rounded-full border border-slate-200/60 dark:border-zinc-800/60">
            {(config.navigation || []).map((item: any) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-primary text-white shadow-sm'
                      : 'text-muted hover:text-foreground hover:bg-slate-200/50 dark:hover:bg-zinc-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {phoneLink && (
              <a
                href={phoneLink}
                className="hidden xl:flex items-center gap-2 text-xs font-semibold text-muted hover:text-foreground transition-colors px-3 py-2"
              >
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>{config.contact?.phoneFormatted || config.contact?.phone}</span>
              </a>
            )}

            <a
              href={finalCtaHref}
              target={isWaType ? '_blank' : undefined}
              rel={isWaType ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-brand-primary hover:bg-brand-primary-hover text-white shadow-md shadow-brand-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {isWaType && <MessageSquare className="w-4 h-4" />}
              <span>{primaryCta.text}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-zinc-900 text-foreground hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
            aria-label="Menüyü aç/kapat"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute inset-x-0 top-[100%] z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-zinc-800 p-6 shadow-2xl space-y-6 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {(config.navigation || []).map((item: any) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-semibold text-foreground hover:bg-brand-light hover:text-brand-primary transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-200 dark:border-zinc-800 space-y-3">
            <a
              href={finalCtaHref}
              onClick={() => setMobileMenuOpen(false)}
              target={isWaType ? '_blank' : undefined}
              rel={isWaType ? 'noopener noreferrer' : undefined}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold bg-brand-primary text-white shadow-lg shadow-brand-primary/25"
            >
              {isWaType && <MessageSquare className="w-5 h-5" />}
              <span>{primaryCta.text}</span>
            </a>

            {phoneLink && (
              <a
                href={phoneLink}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold border border-slate-200 dark:border-zinc-800 text-foreground hover:bg-slate-50 dark:hover:bg-zinc-900"
              >
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>Bizi Arayın: {config.contact?.phoneFormatted || config.contact?.phone}</span>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
