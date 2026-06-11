import React from 'react';
import { useAuthStore } from '@store/authStore';
import { LoadingScreen } from '@components/Generic/LoadingScreen';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles = ['user', 'admin'] }) => {
  const { isAuthenticated, role, bootstrapped } = useAuthStore();

  if (!bootstrapped) return <LoadingScreen />;
  if (!isAuthenticated || !allowedRoles.includes(role)) {
    return null;
  }

  return <>{children}</>;
};
