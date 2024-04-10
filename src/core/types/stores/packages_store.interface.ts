import type { IGetPackagesParams, IPackage, ISingleExpandPackage } from '@/core/types/api';
import type { IndexedGetters } from './common_store.interface';
import type { PACKAGE_TYPES } from '@/core/enums/api';

export interface State {
  packages: IPackage[];
  currentPage: number;
  packagesLimit: number;
  totalPages: number;
  packageType: PACKAGE_TYPES[];
  singlePackage: ISingleExpandPackage | null;
};

export interface Getters extends IndexedGetters {
  // getIsErrorShow: (state: State) => boolean;
};

export interface Actions {
  fetchPackages: (params?: Pick<IGetPackagesParams, 'by' | 'period'>) => void;
  fetchSinglePackage: (packageName: string, type: PACKAGE_TYPES) => void;
  setPageNumber: (newVal: number) => void;
  setTotalPages: (newVal: number) => void;
  setPackageType: (type: PACKAGE_TYPES, isChecked: boolean) => void;
};