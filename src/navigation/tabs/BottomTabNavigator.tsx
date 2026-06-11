import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from '@features/dashboard/DashboardScreen';
import { ProfileScreen } from '@features/profile/ProfileScreen';
import { SettingsScreen } from '@features/settings/SettingsScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Dashboard" component={DashboardScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);
