'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { accountdata } from '@/data/accountdata';
import { AuthContextType } from '@/types/types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [rememberToken, setRememberToken] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const savedAccessToken = Cookies.get('accessToken');
    const savedRememberToken = Cookies.get('rememberToken');
    const savedUser = Cookies.get('user') ? JSON.parse(Cookies.get('user') || '{}') : null;

    if (savedAccessToken) setAccessToken(savedAccessToken);
    if (savedRememberToken) setRememberToken(savedRememberToken);
    if (savedUser) setUser(savedUser);
  }, []);

  const login = (email: string, password: string) => {
    const foundUser = accountdata.find(account => account.email === email && account.password === password);

    if (foundUser) {
      const newAccessToken = `mockAccessToken-${email}`;
      const newRememberToken = `mockRememberToken-${email}`;

      setAccessToken(newAccessToken);
      setRememberToken(newRememberToken);
      setUser(foundUser);

      Cookies.set('accessToken', newAccessToken, { expires: 1 });
      Cookies.set('rememberToken', newRememberToken, { expires: 365 });
      Cookies.set('user', JSON.stringify(foundUser), { expires: 365 });
    } else {
      console.log("Invalid credentials");
    }
  };

  const logout = () => {
    setAccessToken(null);
    setRememberToken(null);
    setUser(null);

    Cookies.remove('accessToken');
    Cookies.remove('rememberToken');
    Cookies.remove('user');
  };

  return (
    <AuthContext.Provider value={{ accessToken, rememberToken, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};