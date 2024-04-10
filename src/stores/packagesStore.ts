import { defineStore } from "pinia";
import type { State, Getters, Actions } from "@/core/types/stores/packages_store.interface";

import { PackagesService } from "@/services";

export const usePackagesStore = defineStore<'packages', State, Getters, Actions>('packages', {
  state: () => ({
    packages: [],
    currentPage: 1,
    packagesLimit: 10,
    totalPages: 0,
    packageType: [],
    singlePackage: null,
  }),
  actions: {
    async fetchPackages(params) {
      this.packages = (await PackagesService.fetchPackages({
        ...params,
        type: this.packageType.length === 1 ? this.packageType[0] : undefined,
        page: this.currentPage,
        limit: this.packagesLimit,
      }))?.data || [];
    },
    async fetchSinglePackage(packageName, type) {
        
    },
    setPageNumber(newVal) {
      this.currentPage = newVal;
    },
    setTotalPages(num) {
      this.totalPages = num;
    },
    setPackageType(type, isChecked) {
      if (isChecked) {
        this.packageType.push(type);

        return;
      };

      const idx = this.packageType.findIndex(t => t === type);

      if (idx < 0) return;

      this.packageType.splice(idx, 1);
    },
  }
});
