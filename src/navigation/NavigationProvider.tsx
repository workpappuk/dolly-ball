import { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { linking } from './linking';
import { AuthStack } from './stacks/AuthStack';
import { MainStack } from './stacks/MainStack';
import { useAuthStore } from '@store/authStore';
import { LoadingScreen } from '@components/Generic/LoadingScreen';

const Stack = createNativeStackNavigator();

export const NavigationProvider = () => {
  const { isAuthenticated, bootstrapped, setBootstrapped } = useAuthStore();

  useEffect(() => {
    setBootstrapped();
  }, [setBootstrapped]);

  return (
    <NavigationContainer theme={DefaultTheme} linking={linking}>
      {bootstrapped ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAuthenticated ? (
            <Stack.Screen name="Main" component={MainStack} />
          ) : (
            <Stack.Screen name="Auth" component={AuthStack} />
          )}
        </Stack.Navigator>
      ) : (
        <LoadingScreen />
      )}
    </NavigationContainer>
  );
};
