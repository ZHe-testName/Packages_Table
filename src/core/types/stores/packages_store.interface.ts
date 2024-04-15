import type { IPackage, ISinglePackageResponse } from '@/core/types/api';
import type { IndexedGetters } from './common_store.interface';

export interface State {
  packages: IPackage[];
  currentPage: number;
  packagesLimit: number;
  totalPages: number;
  searchValue: string;
  singlePackage: ISinglePackageResponse | null;
};

export interface Getters extends IndexedGetters {};

export interface Actions {
  setSearchString: (searchValue: string) => void;
  setPageNumber: (newVal: number) => void;
  setTotalPages: (newVal: number) => void;
  searchPackages: () => void;
  fetchSinglePackage: (packageName: string, version: string) => Promise<boolean>;
};