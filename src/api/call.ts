import axios from 'axios';

import { store } from '@/features';

export const url = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: url,
});

api.interceptors.request.use((config) => {
  const globalStore = store.getState();
  const { isAuthenticated, accessToken } = globalStore.auth;

  if (isAuthenticated) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accessToken}` ?? '';
  }
  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response),
);
