import type { AxiosError, AxiosResponse } from "axios";
import type { IErrorResponse } from "@/core/types/stores/common.interface";
import { useSystemStore } from "@/stores/systemStore";

export const errorHandledTryCatch = async <T>(f: () => Promise<AxiosResponse<T> | undefined>) => {
  const systemStore = useSystemStore();

  try {
    return await f();
  } catch (error) {
    const msg  = (error as AxiosError<IErrorResponse>).response?.data.detail
      || (error as AxiosError<IErrorResponse>).message 
      || 'Something went wrong';

    systemStore.setErrorMessages(msg);
  }
};