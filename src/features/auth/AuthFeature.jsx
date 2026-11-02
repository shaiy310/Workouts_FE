import React from 'react';

import LoginPage from '../../components/Login/LoginPage';
import { useAuth } from './useAuth';

export function AuthFeature() {
  const { login } = useAuth();

  return <LoginPage onLogin={login} />;
}
