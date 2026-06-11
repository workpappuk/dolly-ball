import { View, StatusBar } from 'react-native';
import { NavigationProvider } from '@navigation/NavigationProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@theme/ThemeProvider';

export const App = () => (
  <SafeAreaProvider>
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <NavigationProvider />
      </View>
    </ThemeProvider>
  </SafeAreaProvider>
);
