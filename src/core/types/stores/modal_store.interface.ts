import type { IndexedGetters } from './common_store.interface';
import type { MODAL_NAMES } from '@/core/enums/components';
import type { IModal, IModalContext } from '@/core/types/components/interfaces';
import type { ISinglePackageResponse } from '../api';

export interface State {
  modals: IModal[];
  activeModal: IModal | null;
  activeModalContext: IModalContext | null;
};

export interface Getters extends IndexedGetters {
  getContext: (state: State) => ISinglePackageResponse | null;
};

export interface Actions {
  addModal: (name: MODAL_NAMES, data?: IModalContext) => void;
  removeModal: () => void;
};