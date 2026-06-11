import { create } from 'zustand';

interface AppStore {
  isOnline: boolean;
  lastUpdated: number;
  setOnline: (online: boolean) => void;
  setLastUpdated: (timestamp: number) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  isOnline: true,
  lastUpdated: Date.now(),
  setOnline: (online) => set({ isOnline: online }),
  setLastUpdated: (timestamp) => set({ lastUpdated: timestamp })
}));
