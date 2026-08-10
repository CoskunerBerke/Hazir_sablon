import { create } from 'zustand';
import { SiteConfig, StylePresetId, LanguageCode, ThemeMode } from '@/types/site-config';
import { defaultSiteConfig } from '@/config/default-site-config';
import { applySectorPreset } from '@/config/sector-presets';
import { STYLE_PRESETS } from '@/config/style-presets';
import { translateConfigToLanguage } from '@/lib/i18n';

export type PanelTab = 'content' | 'sections' | 'design' | 'media' | 'contact' | 'settings';
export type ViewportMode = 'desktop' | 'tablet' | 'mobile' | 'fullscreen';

interface SiteStoreState {
  config: SiteConfig;
  pastHistory: SiteConfig[];
  futureHistory: SiteConfig[];

  activePanelTab: PanelTab;
  viewportMode: ViewportMode;
  selectedSection: string | null;
  isSaving: boolean;
  lastSavedAt: string | null;

  // Actions
  setActivePanelTab: (tab: PanelTab) => void;
  setViewportMode: (mode: ViewportMode) => void;
  setSelectedSection: (sectionId: string | null) => void;
  selectSectionAndTab: (sectionId: string) => void;

  updateConfig: (updater: (draft: SiteConfig) => void | SiteConfig, skipHistory?: boolean) => void;
  setConfigDirectly: (newConfig: SiteConfig) => void;

  setLanguage: (lang: LanguageCode) => void;
  toggleThemeMode: () => void;
  setThemeMode: (mode: ThemeMode) => void;

  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;

  resetToDefault: () => void;
  applySector: (sectorId: string) => void;
  applyStylePreset: (presetId: StylePresetId) => void;
  reorderSections: (newOrder: string[]) => void;
  toggleSectionVisibility: (sectionId: string) => void;

  loadFromLocalStorage: () => void;
  saveToLocalStorage: () => void;
}

const LOCAL_STORAGE_KEY = 'site_builder_config_v1';
const MAX_HISTORY_STEPS = 30;

let lastHistoryTimestamp = 0;

function migrateLegacyConfig(config: any): SiteConfig {
  if (!config) return defaultSiteConfig;

  const isStockPhoto = (url?: string) => {
    if (!url) return false;
    return (
      url.includes('/assets/client/') ||
      url.includes('hero.jpg') ||
      url.includes('about.jpg') ||
      url.includes('service-') ||
      url.includes('gallery-') ||
      url.includes('logo.svg')
    );
  };

  const draft = JSON.parse(JSON.stringify(config));

  if (isStockPhoto(draft.brand?.logo)) draft.brand.logo = '';
  if (isStockPhoto(draft.brand?.favicon)) draft.brand.favicon = '';
  if (isStockPhoto(draft.hero?.image)) draft.hero.image = '';
  if (isStockPhoto(draft.about?.image)) draft.about.image = '';
  if (isStockPhoto(draft.seo?.ogImage)) draft.seo.ogImage = '';

  if (Array.isArray(draft.services?.items)) {
    draft.services.items.forEach((item: any) => {
      if (isStockPhoto(item.image)) item.image = '';
    });
  }

  if (Array.isArray(draft.gallery?.items)) {
    draft.gallery.items.forEach((item: any) => {
      if (isStockPhoto(item.image)) item.image = '';
    });
  }

  if (!draft.language) draft.language = 'tr';
  draft.schemaVersion = 2;
  return draft as SiteConfig;
}

export const useSiteStore = create<SiteStoreState>((set, get) => ({
  config: defaultSiteConfig,
  pastHistory: [],
  futureHistory: [],

  activePanelTab: 'content',
  viewportMode: 'desktop',
  selectedSection: null,
  isSaving: false,
  lastSavedAt: null,

  setActivePanelTab: (tab) => set({ activePanelTab: tab }),
  setViewportMode: (mode) => set({ viewportMode: mode }),
  setSelectedSection: (sectionId) => set({ selectedSection: sectionId }),

  selectSectionAndTab: (sectionId: string) => {
    let targetTab: PanelTab = 'content';
    if (sectionId === 'gallery') {
      targetTab = 'media';
    } else if (sectionId === 'contact') {
      targetTab = 'contact';
    } else {
      targetTab = 'content';
    }

    set({
      selectedSection: sectionId,
      activePanelTab: targetTab,
    });
  },

  setLanguage: (lang) => {
    get().updateConfig((draft) => {
      translateConfigToLanguage(draft, lang);
    });
  },

  toggleThemeMode: () => {
    get().updateConfig((draft) => {
      const current = draft.theme.mode;
      draft.theme.mode = current === 'dark' ? 'light' : 'dark';
    });
  },

  setThemeMode: (mode) => {
    get().updateConfig((draft) => {
      draft.theme.mode = mode;
    });
  },

  updateConfig: (updater, skipHistory = false) => {
    const { config, pastHistory } = get();
    const now = Date.now();

    let newPast = pastHistory;
    if (!skipHistory && now - lastHistoryTimestamp > 1500) {
      newPast = [...pastHistory, config].slice(-MAX_HISTORY_STEPS);
      lastHistoryTimestamp = now;
    }

    const draft = JSON.parse(JSON.stringify(config)) as SiteConfig;
    const result = updater(draft);
    const newConfig = result || draft;

    set({
      config: newConfig,
      pastHistory: newPast,
      futureHistory: [],
      isSaving: true,
      lastSavedAt: new Date().toLocaleTimeString('tr-TR'),
    });

    get().saveToLocalStorage();
    setTimeout(() => set({ isSaving: false }), 300);
  },

  setConfigDirectly: (newConfig) => {
    const { config, pastHistory } = get();
    const newPast = [...pastHistory, config].slice(-MAX_HISTORY_STEPS);
    set({
      config: newConfig,
      pastHistory: newPast,
      futureHistory: [],
      lastSavedAt: new Date().toLocaleTimeString('tr-TR'),
    });
    get().saveToLocalStorage();
  },

  undo: () => {
    const { pastHistory, config, futureHistory } = get();
    if (pastHistory.length === 0) return;

    const previous = pastHistory[pastHistory.length - 1];
    const newPast = pastHistory.slice(0, pastHistory.length - 1);
    const newFuture = [config, ...futureHistory].slice(0, MAX_HISTORY_STEPS);

    set({
      config: previous,
      pastHistory: newPast,
      futureHistory: newFuture,
    });
    get().saveToLocalStorage();
  },

  redo: () => {
    const { futureHistory, config, pastHistory } = get();
    if (futureHistory.length === 0) return;

    const next = futureHistory[0];
    const newFuture = futureHistory.slice(1);
    const newPast = [...pastHistory, config].slice(-MAX_HISTORY_STEPS);

    set({
      config: next,
      pastHistory: newPast,
      futureHistory: newFuture,
    });
    get().saveToLocalStorage();
  },

  canUndo: () => get().pastHistory.length > 0,
  canRedo: () => get().futureHistory.length > 0,

  resetToDefault: () => {
    get().setConfigDirectly(defaultSiteConfig);
  },

  applySector: (sectorId) => {
    get().updateConfig((draft) => {
      return applySectorPreset(draft, sectorId);
    });
  },

  applyStylePreset: (presetId) => {
    const presetDef = STYLE_PRESETS.find((p) => p.id === presetId);
    if (!presetDef) return;

    get().updateConfig((draft) => {
      draft.theme.preset = presetId;
      if (presetDef.themeDefaults.colors) {
        draft.theme.colors = {
          ...draft.theme.colors,
          ...presetDef.themeDefaults.colors,
        };
      }
      if (presetDef.themeDefaults.typography) {
        draft.theme.typography = {
          ...draft.theme.typography,
          ...presetDef.themeDefaults.typography,
        };
      }
      if (presetDef.themeDefaults.appearance) {
        draft.theme.appearance = {
          ...draft.theme.appearance,
          ...presetDef.themeDefaults.appearance,
        };
      }
    });
  },

  reorderSections: (newOrder) => {
    get().updateConfig((draft) => {
      draft.sectionOrder = newOrder;
    });
  },

  toggleSectionVisibility: (sectionId) => {
    get().updateConfig((draft) => {
      draft.sectionVisibility[sectionId] = !draft.sectionVisibility[sectionId];
    });
  },

  loadFromLocalStorage: () => {
    if (typeof window === 'undefined') return;
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const migrated = migrateLegacyConfig(parsed);
        set({ config: migrated });
      } else {
        set({ config: defaultSiteConfig });
      }
    } catch (e) {
      console.warn('Could not parse site config from localStorage:', e);
      set({ config: defaultSiteConfig });
    }
  },

  saveToLocalStorage: () => {
    if (typeof window === 'undefined') return;
    try {
      const state = get().config;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Could not save site config to localStorage:', e);
    }
  },
}));
