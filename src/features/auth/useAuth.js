import React from 'react';

export function useAuth() {
  const [user, setUser] = React.useState(null);

  const login = React.useCallback(() => {
    setUser({ name: 'Demo User' });
    return true;
  }, []);

  const logout = React.useCallback(() => {
    setUser(null);
  }, []);

  return { user, login, logout };
}
