export enum UserRole {
  Guest = 'guest',
  User = 'user',
  Admin = 'admin'
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  refreshTokenValue: string | null;
  user: User | null;
  role: UserRole;
  bootstrapped: boolean;
}
