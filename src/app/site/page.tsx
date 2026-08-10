'use client';

import React, { useEffect } from 'react';
import { useSiteStore } from '@/store/use-site-store';
import { SiteRenderer } from '@/components/site/SiteRenderer';

export default function PublishedSitePage() {
  const { config, loadFromLocalStorage } = useSiteStore();

  useEffect(() => {
    loadFromLocalStorage();

    // Real-time synchronization when editor updates config in another tab
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'site_builder_config_v1') {
        loadFromLocalStorage();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [loadFromLocalStorage]);

  return <SiteRenderer config={config} isEditorPreview={false} />;
}
