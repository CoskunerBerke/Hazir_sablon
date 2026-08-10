'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSiteStore } from '@/store/use-site-store';
import { SiteRenderer } from '@/components/site/SiteRenderer';
import { Sparkles, Edit3 } from 'lucide-react';

export default function Home() {
  const { config, loadFromLocalStorage } = useSiteStore();

  useEffect(() => {
    loadFromLocalStorage();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'site_builder_config_v1') {
        loadFromLocalStorage();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [loadFromLocalStorage]);

  const showDemoButton = config.features?.showDemoButton !== false;

  return (
    <div className="relative min-h-screen">
      <SiteRenderer config={config} isEditorPreview={false} />

      {/* Floating Demo Trigger Button to Open /editor */}
      {showDemoButton && (
        <div className="fixed top-20 right-5 z-50 animate-bounce hover:animate-none">
          <Link
            href="/editor"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-extrabold text-xs shadow-2xl border border-white/20 hover:scale-105 transition-all"
          >
            <Sparkles className="w-4 h-4 text-brand-primary fill-current" />
            <span>Sitenizi Özelleştirin (Visual Editor)</span>
            <Edit3 className="w-3.5 h-3.5 opacity-60" />
          </Link>
        </div>
      )}
    </div>
  );
}
