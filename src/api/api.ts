import { useSystemStore } from '@/stores/systemStore';
import { usePackagesStore } from '@/stores/packagesStore';

import axios, 
{ 
  type AxiosInstance, 
  type AxiosResponse,
  type AxiosRequestConfig,
  type AxiosError,
  type InternalAxiosRequestConfig
} from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance: AxiosInstance = axios.create(axiosConfig);

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    useSystemStore().setIsLoading(true);

    return config;
  },
  (error: AxiosError<any>) => {
    useSystemStore().setIsLoading(false);

    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    useSystemStore().setIsLoading(false);
    usePackagesStore().setTotalPages(+res.headers['x-total-pages']);

    return res;
  },
  (error: AxiosError<any>) => {
    useSystemStore().setIsLoading(false);

    return Promise.reject(error);
  }
);

export const API = instance;
