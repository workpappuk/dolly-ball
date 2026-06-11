import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storage } from '@services/storage/storage';

export interface SettingsState {
  themeMode: 'light' | 'dark';
  language: 'en' | 'es';
  setThemeMode: (mode: 'light' | 'dark') => void;
  setLanguage: (language: 'en' | 'es') => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      themeMode: 'light',
      language: 'en',
      setThemeMode: (themeMode) => set({ themeMode }),
      setLanguage: (language) => set({ language })
    }),
    {
      name: 'dolly-ball-settings',
      storage: createJSONStorage(() => storage)
    }
  )
);
