import { useSystemStore } from '@/stores/systemStore';
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
    const systemStore = useSystemStore();

    systemStore.setIsLoading(true);

    return config;
  },
  (error: AxiosError<any>) => {
    const systemStore = useSystemStore();
    systemStore.setIsLoading(false);

    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    const systemStore = useSystemStore();
    systemStore.setIsLoading(false);

    return res;
  },
  (error: AxiosError<any>) => {
    const systemStore = useSystemStore();
    systemStore.setIsLoading(false);

    return Promise.reject(error);
  }
);

export const API = instance;
