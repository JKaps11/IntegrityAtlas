import { create, StoreApi } from 'zustand'

type appMode = 'global' | 'projectHome' | 'valueGetter'

type appState = {
  appMode: appMode,
  setAppMode: (appMode: appMode) => void
}

export const useConfigStore = create<appState>((set) => ({
  appMode: 'global',
  setAppMode: (appMode) => set({ appMode }),
}))
