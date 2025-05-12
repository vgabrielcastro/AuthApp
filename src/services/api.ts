import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://SEU_IPV4:3000',
  timeout: 10000,
});

api.interceptors.request.use(
  async config => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Erro ao acessar o AsyncStorage:', error);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => response,
  error => {
    console.log('Erro na requisição:', error.message);
    console.log('URL:', error.config?.url);
    console.log('Método:', error.config?.method);
    return Promise.reject(error);
  },
);

export default api;
