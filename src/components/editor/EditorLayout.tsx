'use client';

import React, { useEffect } from 'react';
import { useSiteStore, PanelTab } from '@/store/use-site-store';
import { SetupWizard } from './SetupWizard';
import { ContentPanel } from './panels/ContentPanel';
import { SectionsPanel } from './panels/SectionsPanel';
import { DesignPanel } from './panels/DesignPanel';
import { MediaPanel } from './panels/MediaPanel';
import { ContactPanel } from './panels/ContactPanel';
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
    setLanguage,
  } = useSiteStore();

  useEffect(() => {
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);

  const currentLang = config.language || 'tr';

  const tabs: Array<{ id: PanelTab; label: string; icon: React.ReactNode }> = [
    { id: 'content', label: 'İçerik', icon: <FileText className="w-4 h-4" /> },
    { id: 'sections', label: 'Bölümler', icon: <Layers className="w-4 h-4" /> },
    { id: 'design', label: 'Tasarım', icon: <Palette className="w-4 h-4" /> },
    { id: 'media', label: 'Fotoğraflar', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'contact', label: 'İletişim', icon: <Phone className="w-4 h-4" /> },
    { id: 'settings', label: 'Ayarlar', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-slate-100 dark:bg-zinc-950">
      {/* 1. TOPBAR CONTROLS */}
      <header className="h-14 bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 px-4 flex items-center justify-between z-50 relative shrink-0 shadow-xs">
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
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
              title="Geri Al (Ctrl+Z)"
              aria-label="Geri Al"
            >
              <Undo2 className="w-4 h-4" />
            </button>
            <button
              onClick={redo}
              disabled={!canRedo()}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
              title="İleri Al (Ctrl+Y)"
              aria-label="İleri Al"
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

        {/* Center: Viewport Switchers & Language Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-zinc-800/60 p-1 rounded-xl border border-slate-200/60 dark:border-zinc-800">
            <button
              onClick={() => setViewportMode('desktop')}
              className={`p-1.5 rounded-lg text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                viewportMode === 'desktop'
                  ? 'bg-white dark:bg-zinc-900 text-brand-primary shadow-xs'
                  : 'text-muted hover:text-foreground'
              }`}
              title="Masaüstü Görünümü"
              aria-label="Masaüstü Görünümü"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewportMode('tablet')}
              className={`p-1.5 rounded-lg text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                viewportMode === 'tablet'
                  ? 'bg-white dark:bg-zinc-900 text-brand-primary shadow-xs'
                  : 'text-muted hover:text-foreground'
              }`}
              title="Tablet Görünümü"
              aria-label="Tablet Görünümü"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewportMode('mobile')}
              className={`p-1.5 rounded-lg text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                viewportMode === 'mobile'
                  ? 'bg-white dark:bg-zinc-900 text-brand-primary shadow-xs'
                  : 'text-muted hover:text-foreground'
              }`}
              title="Mobil Görünümü"
              aria-label="Mobil Görünümü"
            >
              <Smartphone className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewportMode(viewportMode === 'fullscreen' ? 'desktop' : 'fullscreen')}
              className={`p-1.5 rounded-lg text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                viewportMode === 'fullscreen'
                  ? 'bg-white dark:bg-zinc-900 text-brand-primary shadow-xs'
                  : 'text-muted hover:text-foreground'
              }`}
              title="Tam Ekran Önizle"
              aria-label="Tam Ekran Önizle"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* TR / EN Switcher Pill */}
          <div className="hidden sm:flex items-center bg-slate-100 dark:bg-zinc-800 p-0.5 rounded-xl border border-slate-200 dark:border-zinc-800">
            <button
              onClick={() => setLanguage('tr')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all ${
                currentLang === 'tr'
                  ? 'bg-white dark:bg-zinc-900 text-brand-primary shadow-xs'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              TR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all ${
                currentLang === 'en'
                  ? 'bg-white dark:bg-zinc-900 text-brand-primary shadow-xs'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Right: Go to Published Site View */}
        <div className="flex items-center gap-2 relative z-50">
          <a
            href="/site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-brand-primary text-white shadow-sm hover:bg-brand-primary-hover transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary cursor-pointer pointer-events-auto"
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
          <aside className="w-full md:w-[440px] lg:w-[460px] bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-zinc-800 flex flex-col z-20 shrink-0 shadow-lg">
            {/* Panel Tabs 2-Column Grid Navigation */}
            <div className="p-3 border-b border-slate-200 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-950/70 shrink-0">
              <div role="tablist" aria-label="Editör Düzenleme Panelleri" className="grid grid-cols-2 gap-2">
                {tabs.map((tab) => {
                  const isActive = activePanelTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      id={`tab-${tab.id}`}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`panel-${tab.id}`}
                      onClick={() => setActivePanelTab(tab.id)}
                      className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand-primary active:scale-[0.98] ${
                        isActive
                          ? 'bg-white dark:bg-zinc-800 text-brand-primary shadow-sm border border-brand-primary/30 dark:border-brand-primary/40 ring-1 ring-brand-primary/20'
                          : 'bg-white/70 dark:bg-zinc-900/70 text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800/80 hover:text-foreground'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg shrink-0 transition-colors ${isActive ? 'bg-brand-light text-brand-primary' : 'bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400'}`}>
                        {tab.icon}
                      </div>
                      <span className="truncate text-left font-bold">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Panel Content Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {activePanelTab === 'content' && <ContentPanel />}
              {activePanelTab === 'sections' && <SectionsPanel />}
              {activePanelTab === 'design' && <DesignPanel />}
              {activePanelTab === 'media' && <MediaPanel />}
              {activePanelTab === 'contact' && <ContactPanel />}
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
