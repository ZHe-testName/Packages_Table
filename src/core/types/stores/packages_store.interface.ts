import type { IGetPackagesBody, IPackage } from '@/core/types/api';
import type { IndexedGetters } from './common_store.interface';
import type { PACKAGE_TYPES } from '@/core/enums/api';

export interface State {
  packages: IPackage[];
  currentPage: number;
  packagesLimit: number;
  packageType: PACKAGE_TYPES | undefined;
};

export interface Getters extends IndexedGetters {
  // getIsErrorShow: (state: State) => boolean;
};

export interface Actions {
  fetchPackages: (params?: Pick<IGetPackagesBody, 'by' | 'period'>) => void;
  setPageNumber: (newVal: number) => void;
};