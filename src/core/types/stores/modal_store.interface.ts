import type { IndexedGetters } from './common_store.interface';
import type { MODAL_NAMES } from '@/core/enums/components';
import type { IModal, IModalContext } from '@/core/types/components/interfaces';

export interface State {
  modals: IModal[];
  activeModal: IModal | null;
  activeModalContext: IModalContext | null;
};

export interface Getters extends IndexedGetters {};

export interface Actions {
  addModal: (name: MODAL_NAMES, data?: IModalContext) => void;
  removeModal: () => void;
};