import { create } from "zustand"

type ErrorType = null | ''

interface ErrorState {
    errorType: ErrorType
    errorMessage: string | null
    showErrorModal: boolean
    setError: (type: ErrorType, message: string) => void
    clearError: () => void
}

export const useErrorStore = create<ErrorState>((set) => ({
  errorType: null,
  errorMessage: null,
  showErrorModal: false,
  setError: (type, message) => set(() => ({
    errorType: type,
    errorMessage: message,
    showErrorModal: true,
  })),
  clearError: () => set(() => ({
    errorType: null,
    errorMessage: null,
    showErrorModal: false,
  }))
}));