import { storage } from '@services/storage/storage';

export const getAuthToken = async () => {
  return storage.getItem('auth_token');
};

export const getRefreshToken = async () => {
  return storage.getItem('refresh_token');
};

export const setAuthToken = async (token: string) => {
  await storage.setItem('auth_token', token);
};

export const setRefreshToken = async (refreshToken: string) => {
  await storage.setItem('refresh_token', refreshToken);
};

export const clearTokens = async () => {
  await storage.removeItem('auth_token');
  await storage.removeItem('refresh_token');
};
