import type { IndexedGetters } from './common.interface';

export interface State {
  isLoading: boolean;
  errorMessage: string;
};

export interface Getters extends IndexedGetters {
  getIsErrorShow: (state: State) => boolean;
};

export interface Actions {
  setIsLoading: (val: boolean) => void;
  setErrorMessages: (msg: string) => void;
  clearErrorMessage: () => void;
};
