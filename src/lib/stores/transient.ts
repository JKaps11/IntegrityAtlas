import { create } from 'zustand'

interface TransientState {
  loading: boolean,
  setLoading: (loading: boolean) => void
}

export const useTransientStore = create<TransientState>((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
}))
