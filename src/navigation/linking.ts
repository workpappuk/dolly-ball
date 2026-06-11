import { LinkingOptions } from '@react-navigation/native';

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['myapp://', 'https://dolly-ball.local', 'http://localhost:8080'],
  config: {
    screens: {
      Auth: {
        path: 'auth',
        screens: {
          Login: 'login'
        }
      },
      Main: {
        path: 'app',
        screens: {
          Dashboard: 'dashboard',
          Profile: 'profile',
          Settings: 'settings'
        }
      }
    }
  }
};
