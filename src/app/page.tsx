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

      {/* Floating Visual Editor Trigger Button (Positioned at bottom-right so it never overlaps header or logo) */}
      {showDemoButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <Link
            href="/editor"
            className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-extrabold text-xs shadow-2xl border border-white/20 hover:scale-105 active:scale-95 transition-all shadow-slate-900/30"
          >
            <Sparkles className="w-4 h-4 text-brand-primary fill-current" />
            <span>Sitenizi Özelleştirin (Visual Editor)</span>
            <Edit3 className="w-3.5 h-3.5 opacity-70" />
          </Link>
        </div>
      )}
    </div>
  );
}
