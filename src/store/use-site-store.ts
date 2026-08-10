import { create } from 'zustand';
import { SiteConfig, StylePresetId } from '@/types/site-config';
import { defaultSiteConfig } from '@/config/default-site-config';
import { applySectorPreset } from '@/config/sector-presets';
import { STYLE_PRESETS } from '@/config/style-presets';

export type PanelTab = 'content' | 'sections' | 'design' | 'media' | 'contact' | 'seo' | 'settings';
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

  updateConfig: (updater: (draft: SiteConfig) => void | SiteConfig) => void;
  setConfigDirectly: (newConfig: SiteConfig) => void;

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

  updateConfig: (updater) => {
    const { config, pastHistory } = get();

    // Push current config to history
    const newPast = [...pastHistory, config].slice(-MAX_HISTORY_STEPS);

    // Deep clone config to avoid direct mutation
    const draft = JSON.parse(JSON.stringify(config)) as SiteConfig;
    const result = updater(draft);
    const newConfig = result || draft;

    set({
      config: newConfig,
      pastHistory: newPast,
      futureHistory: [], // Clear redo stack on new action
      isSaving: true,
      lastSavedAt: new Date().toLocaleTimeString('tr-TR'),
    });

    // Auto save
    get().saveToLocalStorage();
    setTimeout(() => set({ isSaving: false }), 400);
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
        set({ config: parsed });
      }
    } catch (e) {
      console.warn('Could not parse site config from localStorage:', e);
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
