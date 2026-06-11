import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AuthState, UserRole } from '../types/auth';
import { storage } from '@services/storage/storage';

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
  setBootstrapped: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      token: null,
      refreshTokenValue: null,
      user: null,
      role: UserRole.Guest,
      bootstrapped: false,
      login: async (email, _password) => {
        const token = 'token-example';
        const refreshTokenValue = 'refresh-token-example';
        const user = { id: '1', name: 'Alex', email };
        set({ isAuthenticated: true, token, refreshTokenValue, user, role: UserRole.User });
      },
      logout: () => set({ isAuthenticated: false, token: null, refreshTokenValue: null, user: null, role: UserRole.Guest }),
      refreshToken: async () => {
        const refreshTokenValue = get().refreshTokenValue;
        if (!refreshTokenValue) throw new Error('No refresh token');
        set({ token: 'refreshed-token-example' });
      },
      setBootstrapped: () => set({ bootstrapped: true })
    }),
    {
      name: 'dolly-ball-auth',
      storage: createJSONStorage(() => storage)
    }
  )
);
