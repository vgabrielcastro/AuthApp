import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import { AuthContextProps, User } from '../types/interfaces.auth';

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const userData = await AsyncStorage.getItem('user');

        if (token && userData) {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Erro ao carregar usuário', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      console.log('Iniciando login...');
      console.log('Email:', email);

      const response = await api.get(`/users?email=${email}`);
      console.log('Resposta da API:', response.data);

      const users = response.data;
      if (!Array.isArray(users) || users.length === 0) {
        console.log('Usuário não encontrado');
        throw new Error('Usuário não encontrado');
      }

      const user = users[0];
      console.log('Usuário encontrado:', user);

      if (user.password !== password) {
        console.log('Senha incorreta');
        throw new Error('Senha incorreta');
      }

      const token = 'fake-jwt-token-' + Math.random();
      console.log('Token gerado:', token);

      const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      console.log('Dados salvos no AsyncStorage');

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setUser(userData);
      console.log('Login concluído com sucesso');
    } catch (error: any) {
      console.error('Erro detalhado:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        config: error.config,
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');

      api.defaults.headers.common.Authorization = '';
      setUser(null);
    } catch (error) {
      console.error('Erro ao realizar logout', error);
    }
  };

  return (
    <AuthContext.Provider value={{user, login, logout, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
