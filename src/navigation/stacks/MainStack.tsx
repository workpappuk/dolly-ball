import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from '../tabs/BottomTabNavigator';

const Stack = createNativeStackNavigator();

export const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={BottomTabNavigator} />
  </Stack.Navigator>
);
