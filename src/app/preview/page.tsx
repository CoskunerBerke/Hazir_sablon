'use client';

import React, { useEffect } from 'react';
import { useSiteStore } from '@/store/use-site-store';
import { SiteRenderer } from '@/components/site/SiteRenderer';

export default function PreviewPage() {
  const { config, loadFromLocalStorage } = useSiteStore();

  useEffect(() => {
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);

  return <SiteRenderer config={config} isEditorPreview={false} />;
}
