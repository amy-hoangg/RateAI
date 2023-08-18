import React, { createContext, useContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import loginService from '../service/loginService';
import { AuthContextType, AuthProviderProps } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated when component mounts
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const signIn = async (username: string, password: string) => {
    try {
      const response = await loginService.login(username, password);
      const token = response.token;
      localStorage.setItem('token', token);
  
      const decodedToken = jwt_decode(token) as { id: string };
      localStorage.setItem('userId', decodedToken.id);
  
      setIsAuthenticated(true);
      console.log('Sign in successful!');
    } 
    catch (error) {
      console.error('Error signing in:', error);
    }
  };
  
  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
    console.log('Sign out successful');
  };
  

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
