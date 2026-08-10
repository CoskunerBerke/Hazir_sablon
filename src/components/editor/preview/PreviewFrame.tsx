'use client';

import React from 'react';
import { useSiteStore } from '@/store/use-site-store';
import { SiteRenderer } from '@/components/site/SiteRenderer';

export const PreviewFrame: React.FC = () => {
  const { config, viewportMode, selectedSection, setSelectedSection } = useSiteStore();

  const getViewportWidthClass = () => {
    switch (viewportMode) {
      case 'mobile':
        return 'max-w-[390px] h-[844px] my-6 rounded-[40px] border-[12px] border-slate-900 shadow-2xl overflow-y-auto';
      case 'tablet':
        return 'max-w-[768px] h-[900px] my-6 rounded-[28px] border-[10px] border-slate-900 shadow-2xl overflow-y-auto';
      case 'fullscreen':
        return 'w-full h-full';
      default:
        return 'w-full h-full';
    }
  };

  return (
    <div className="w-full h-full bg-slate-200/60 dark:bg-zinc-950 flex items-center justify-center p-2 lg:p-4 overflow-auto">
      <div className={`transition-all duration-300 bg-background shadow-2xl relative ${getViewportWidthClass()}`}>
        <SiteRenderer
          config={config}
          isEditorPreview={viewportMode !== 'fullscreen'}
          selectedSectionId={selectedSection}
          onSelectSection={(id) => setSelectedSection(id)}
        />
      </div>
    </div>
  );
};
