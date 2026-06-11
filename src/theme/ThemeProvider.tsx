import React from 'react';
import { useColorScheme } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { useSettingsStore } from '@store/settingsStore';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { themeMode } = useSettingsStore();
  const deviceScheme = useColorScheme();
  const isDark = themeMode === 'dark' || (themeMode === 'light' ? false : deviceScheme === 'dark');

  return <View style={[styles.root, isDark ? styles.dark : styles.light]}>{children}</View>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  light: {
    backgroundColor: '#ffffff'
  },
  dark: {
    backgroundColor: '#0f172a'
  }
});
