import { create } from 'zustand'
import { persist } from 'zustand/middleware';

// Helper to get default initial state
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

// Helper to sync DOM class with current state
const updateDomClass = (theme : string) => {
  if (typeof window === 'undefined') return;
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};

const useThemeStore = create(persist(
    (set, get) => ({
      theme: getInitialTheme(),

      // Initialize DOM class on app load
      initTheme: () => {
        updateDomClass(get().theme);
      },

      setTheme: (theme) => {
        updateDomClass(theme);
        set({ theme });
      },

      toggleTheme: () => {
        const nextTheme = get().theme === 'dark' ? 'light' : 'dark';
        updateDomClass(nextTheme);
        set({ theme: nextTheme });
      },
    }), {
    name: 'theme-storage', // Key used in localStorage,
    partialize: (state: {theme: string, toggleTheme: () => void, initTheme: () => void, setTheme: (theme: string) => void}) => ({theme: state.theme, toggleTheme: state.toggleTheme,}),
    onRehydrateStorage: () => (state) => {
        // Apply DOM class as soon as state rehydrates from storage
        if (state) updateDomClass(state.theme);
      },
}
))

export default useThemeStore;