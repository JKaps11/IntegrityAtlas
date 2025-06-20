import { create } from "zustand";

interface DashboardState {
    currModule: { id: number, name: string, step: number }
    setCurrModule: (currModule: { id: number, name: string, step: number }) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
    currModule: { id: 0, name: "First Module", step: 0 },
    setCurrModule: (currModule) => set(() => ({
        currModule: currModule,
    })),
}))