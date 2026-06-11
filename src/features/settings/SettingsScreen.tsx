import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@components/Button';
import { Select } from '@components/Select';
import { useSettingsStore } from '@store/settingsStore';
import { useAuthStore } from '@store/authStore';

export const SettingsScreen = () => {
  const themeMode = useSettingsStore((state) => state.themeMode);
  const language = useSettingsStore((state) => state.language);
  const setThemeMode = useSettingsStore((state) => state.setThemeMode);
  const setLanguage = useSettingsStore((state) => state.setLanguage);
  const logout = useAuthStore((state) => state.logout);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Select
        label="Theme"
        value={themeMode}
        options={[{ label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }]}
        onValueChange={(value) => setThemeMode(value as 'light' | 'dark')}
      />
      <Select
        label="Language"
        value={language}
        options={[{ label: 'English', value: 'en' }, { label: 'Español', value: 'es' }]}
        onValueChange={(value) => setLanguage(value as 'en' | 'es')}
      />
      <Button label="Sign Out" variant="secondary" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 20,
    color: '#111827'
  }
});
