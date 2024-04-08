import type { IGetPackagesBody, IPackage } from '@/core/types/api';
import type { IndexedGetters } from './common_store.interface';

export interface State {
  packages: IPackage[];
  currentPage: number;
  packagesLimit: number;
};

export interface Getters extends IndexedGetters {
  // getIsErrorShow: (state: State) => boolean;
};

export interface Actions {
  fetchPackages: (params?: Pick<IGetPackagesBody, 'by' | 'period' | 'type'>) => void;
};