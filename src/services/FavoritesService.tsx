import { create } from "zustand";

const useFavoritesService = create((set, get) => ({
    darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
    toggleDarkMode: () => set((state:any) => ({ darkMode: !state.darkMode }))
}));

export default useFavoritesService;