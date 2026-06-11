import { Platform, StatusBar, View } from 'react-native';
import { NavigationProvider } from '@navigation/NavigationProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@theme/ThemeProvider';

export const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        {Platform.OS !== 'web' && <StatusBar barStyle="dark-content" />}
        <View style={{ flex: 1 }}>
          <NavigationProvider />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
