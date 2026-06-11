import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

export const storage = {
  getItem: async (name: string) => {
    if (isWeb) {
      return Promise.resolve(window.localStorage.getItem(name));
    }
    const AsyncStorage = require('@react-native-async-storage/async-storage').default;
    return AsyncStorage.getItem(name);
  },
  setItem: async (name: string, value: string) => {
    if (isWeb) {
      window.localStorage.setItem(name, value);
      return Promise.resolve();
    }
    const AsyncStorage = require('@react-native-async-storage/async-storage').default;
    return AsyncStorage.setItem(name, value);
  },
  removeItem: async (name: string) => {
    if (isWeb) {
      window.localStorage.removeItem(name);
      return Promise.resolve();
    }
    const AsyncStorage = require('@react-native-async-storage/async-storage').default;
    return AsyncStorage.removeItem(name);
  }
};
