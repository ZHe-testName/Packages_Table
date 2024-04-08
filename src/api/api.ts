// import router from '@/router';
// import { wasLogged } from '@/utils/helpers/was-logged.helper';
// import { isTokenExpired } from '@/utils/helpers/is-token-expired.helper';
// import { storeToRefs } from 'pinia';
// import { useSystemStore } from '@/stores/systemStore';
import axios, 
{ 
  type AxiosInstance, 
  type AxiosResponse,
  type AxiosRequestConfig,
  type AxiosError,
  type InternalAxiosRequestConfig
} from "axios";
// import type { IErrorResponse } from "@/utils/types/interfaces/services/common-data";
// import { ENDPOINTS, ROUTER_URL } from "@/utils/types/enums";
// import { useUserStore } from '@/stores/userStore';

const axiosConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance: AxiosInstance = axios.create(axiosConfig);

// needs to cancel already triggered requests
// Also we can pass reasons for better UX into .abort() controller instance method
// const controller: AbortController | undefined = new AbortController();

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // const userStore = useUserStore();
    // const systemStore = useSystemStore();

    // if (
    //   isTokenExpired() 
    //   && config.url !== ENDPOINTS.LOGIN
    //   && config.url !== ENDPOINTS.LOGOUT
    //   && config.url !== ENDPOINTS.REGISTER
    // ) {

      // if (!wasLogged()) {
      //   router.push({ path: ROUTER_URL.LOGIN });

      //   controller.abort();

      //   return { ...config, signal: controller?.signal };
      // };

      // const res = await userStore.refreshToken();

      // if (!res) {
      //   controller.abort();

      //   return { ...config, signal: controller?.signal };
      // };
    // };

    // const { refresh_token, access_token } = storeToRefs(userStore);

    // if (config.url === ENDPOINTS.REFRESH_TOKEN) {
    //   config.headers.Authorization = `Bearer ${refresh_token.value}`;
    // } else if (
    //   config.url !== ENDPOINTS.LOGIN
    //   && config.url !== ENDPOINTS.LOGOUT
    //   && config.url !== ENDPOINTS.REGISTER
    // ) {
    //   config.headers.Authorization = `Bearer ${access_token.value}`;
    // }

    // if (!systemStore.hideLoader) {
    //   systemStore.setIsLoading(true);
    // };

    return config;
  },
  // (error: AxiosError<IErrorResponse>) => {
    (error: AxiosError<any>) => {
    // const systemStore = useSystemStore();
    // systemStore.setIsLoading(false);

    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    // const systemStore = useSystemStore();
    // systemStore.setIsLoading(false);

    return res;
  },
  // (error: AxiosError<IErrorResponse>) => {
    (error: AxiosError<any>) => {
    // const systemStore = useSystemStore();
    // systemStore.setIsLoading(false);

    return Promise.reject(error);
  }
);

export const API = instance;
