import { AxiosError } from "axios";

export interface IndexedGetters {
  [index: string]: any;
};

export interface IErrorResponse extends Partial<AxiosError> {
  status: number;
  message: string;
  links?: {
    documentation?: string;
  }
};