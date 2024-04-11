import type { IGetPackagesParams, IPackage, ISingleExpandPackage } from '@/core/types/api';
import type { IndexedGetters } from './common_store.interface';
import type { PACKAGE_TYPES } from '@/core/enums/api';
import type { ISinglePackageContext } from '../components/interfaces';

export interface State {
  packages: IPackage[];
  currentPage: number;
  packagesLimit: number;
  totalPages: number;
  packageType: PACKAGE_TYPES[];
  singlePackage: ISingleExpandPackage | null;
};

export interface Getters extends IndexedGetters {
  getSinglePackageData: (state: State) => ISinglePackageContext | undefined;
};

export interface Actions {
  fetchPackages: (params?: Pick<IGetPackagesParams, 'by' | 'period'>) => void;
  fetchSinglePackage: (packageName: string, type: PACKAGE_TYPES) => Promise<boolean>;
  setPageNumber: (newVal: number) => void;
  setTotalPages: (newVal: number) => void;
  setPackageType: (type: PACKAGE_TYPES, isChecked: boolean) => void;
};