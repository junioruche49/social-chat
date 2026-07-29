import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../shared/types/user';


const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,

      // Login action
      login: (userData: User, accessToken: string, refreshToken: string) => set({ 
        user: userData, 
        accessToken:accessToken,
        refreshToken: refreshToken,
        isAuthenticated: true 
      }),

      // Logout action
      logout: () => {set({ 
        user: null, 
        accessToken: null,
        refreshToken: null, 
        isAuthenticated: false 
      })
            useAuthStore.persist.clearStorage();

    }
    }),
    {
      name: 'auth-storage', // Key used in localStorage
      // Secure option: Only persist user and token, not derived states
      partialize: (state: { user: User | null; accessToken: string| null; refreshToken: string | null; isAuthenticated: boolean; login: (userData: User, accessToken: string, refreshToken: string)=>void; logout: () => void;}) => ({ user: state.user, accessToken: state.accessToken, refreshToken: state.refreshToken, isAuthenticated: state.isAuthenticated,}), 
    }
  )
);

export default useAuthStore;
