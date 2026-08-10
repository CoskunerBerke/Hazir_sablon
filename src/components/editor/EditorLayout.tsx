'use client';

import React, { useEffect } from 'react';
import { useSiteStore, PanelTab } from '@/store/use-site-store';
import { SetupWizard } from './SetupWizard';
import { ContentPanel } from './panels/ContentPanel';
import { SectionsPanel } from './panels/SectionsPanel';
import { DesignPanel } from './panels/DesignPanel';
import { MediaPanel } from './panels/MediaPanel';
import { ContactPanel } from './panels/ContactPanel';
import { SeoPanel } from './panels/SeoPanel';
import { SettingsPanel } from './panels/SettingsPanel';
import { PreviewFrame } from './preview/PreviewFrame';

import {
  Undo2,
  Redo2,
  Monitor,
  Tablet,
  Smartphone,
  Maximize2,
  FileText,
  Layers,
  Palette,
  Image as ImageIcon,
  Phone,
  Search,
  Settings,
  ExternalLink,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const EditorLayout: React.FC = () => {
  const {
    config,
    loadFromLocalStorage,
    activePanelTab,
    setActivePanelTab,
    viewportMode,
    setViewportMode,
    undo,
    redo,
    canUndo,
    canRedo,
    isSaving,
    lastSavedAt,
  } = useSiteStore();

  useEffect(() => {
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);

  const tabs: Array<{ id: PanelTab; label: string; icon: React.ReactNode }> = [
    { id: 'content', label: 'İçerik', icon: <FileText className="w-4 h-4" /> },
    { id: 'sections', label: 'Bölümler', icon: <Layers className="w-4 h-4" /> },
    { id: 'design', label: 'Tasarım', icon: <Palette className="w-4 h-4" /> },
    { id: 'media', label: 'Fotoğraflar', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'contact', label: 'İletişim', icon: <Phone className="w-4 h-4" /> },
    { id: 'seo', label: 'SEO', icon: <Search className="w-4 h-4" /> },
    { id: 'settings', label: 'Ayarlar', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-slate-100 dark:bg-zinc-950 select-none">
      {/* 1. TOPBAR CONTROLS */}
      <header className="h-14 bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 px-4 flex items-center justify-between z-30 shrink-0 shadow-xs">
        {/* Left: Brand & Undo/Redo */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-brand-primary text-white flex items-center justify-center font-extrabold text-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-sm text-foreground tracking-tight hidden sm:inline-block">
              Görsel Site Editörü
            </span>
          </div>

          <div className="h-4 w-px bg-slate-200 dark:bg-zinc-800" />

          {/* Undo / Redo */}
          <div className="flex items-center gap-1">
            <button
              onClick={undo}
              disabled={!canUndo()}
              className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              title="Geri Al (Ctrl+Z)"
            >
              <Undo2 className="w-4 h-4" />
            </button>
            <button
              onClick={redo}
              disabled={!canRedo()}
              className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              title="İleri Al (Ctrl+Y)"
            >
              <Redo2 className="w-4 h-4" />
            </button>
          </div>

          {/* Save status badge */}
          <div className="hidden md:flex items-center gap-1.5 text-xs text-muted pl-2">
            {isSaving ? (
              <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            ) : (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            )}
            <span>{isSaving ? 'Kaydediliyor...' : lastSavedAt ? `Kaydedildi ${lastSavedAt}` : 'Kaydedildi'}</span>
          </div>
        </div>

        {/* Center: Viewport Switchers */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-zinc-800/60 p-1 rounded-xl border border-slate-200/60 dark:border-zinc-800">
          <button
            onClick={() => setViewportMode('desktop')}
            className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
              viewportMode === 'desktop'
                ? 'bg-white dark:bg-zinc-900 text-brand-primary shadow-xs'
                : 'text-muted hover:text-foreground'
            }`}
            title="Masaüstü Görünümü"
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewportMode('tablet')}
            className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
              viewportMode === 'tablet'
                ? 'bg-white dark:bg-zinc-900 text-brand-primary shadow-xs'
                : 'text-muted hover:text-foreground'
            }`}
            title="Tablet Görünümü"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewportMode('mobile')}
            className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
              viewportMode === 'mobile'
                ? 'bg-white dark:bg-zinc-900 text-brand-primary shadow-xs'
                : 'text-muted hover:text-foreground'
            }`}
            title="Mobil Görünümü"
          >
            <Smartphone className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewportMode(viewportMode === 'fullscreen' ? 'desktop' : 'fullscreen')}
            className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
              viewportMode === 'fullscreen'
                ? 'bg-white dark:bg-zinc-900 text-brand-primary shadow-xs'
                : 'text-muted hover:text-foreground'
            }`}
            title="Tam Ekran Önizle"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Go to Published Site View */}
        <div className="flex items-center gap-2">
          <a
            href="/site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-brand-primary text-white shadow-sm hover:bg-brand-primary-hover transition-all"
          >
            <span>Yayın Görünümü</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* 2. WORKSPACE AREA */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Side Editing Sidebar Panel */}
        {viewportMode !== 'fullscreen' && (
          <aside className="w-full md:w-[380px] lg:w-[420px] bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-zinc-800 flex flex-col z-20 shrink-0 shadow-lg">
            {/* Panel Tabs Navigation */}
            <div className="flex items-center overflow-x-auto p-2 border-b border-slate-100 dark:border-zinc-800 gap-1 no-scrollbar bg-slate-50/50 dark:bg-zinc-950/50">
              {tabs.map((tab) => {
                const isActive = activePanelTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActivePanelTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                      isActive
                        ? 'bg-white dark:bg-zinc-800 text-brand-primary shadow-xs border border-slate-200/80 dark:border-zinc-700'
                        : 'text-muted hover:text-foreground hover:bg-slate-100 dark:hover:bg-zinc-800/40'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Panel Content Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {activePanelTab === 'content' && <ContentPanel />}
              {activePanelTab === 'sections' && <SectionsPanel />}
              {activePanelTab === 'design' && <DesignPanel />}
              {activePanelTab === 'media' && <MediaPanel />}
              {activePanelTab === 'contact' && <ContactPanel />}
              {activePanelTab === 'seo' && <SeoPanel />}
              {activePanelTab === 'settings' && <SettingsPanel />}
            </div>
          </aside>
        )}

        {/* Right Side Live Interactive Preview Area */}
        <main className="flex-1 h-full overflow-hidden relative">
          <PreviewFrame />
        </main>
      </div>

      {/* Setup Wizard Modal for initial onboarding */}
      {!config.isWizardCompleted && <SetupWizard />}
    </div>
  );
};
