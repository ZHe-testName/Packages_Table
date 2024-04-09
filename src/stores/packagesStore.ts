import { defineStore } from "pinia";
import type { State, Getters, Actions } from "@/core/types/stores/packages_store.interface";

import { PackagesService } from "@/services";

export const usePackagesStore = defineStore<'packages', State, Getters, Actions>('packages', {
  state: () => ({
    packages: [],
    currentPage: 1,
    packagesLimit: 10,
    totalPages: 0,
    packageType: undefined,
  }),
  actions: {
    async fetchPackages(params) {
      this.packages = (await PackagesService.fetchPackages({
        ...params,
        type: this.packageType,
        page: this.currentPage,
        limit: this.packagesLimit,
      }))?.data || [];
    },
    setPageNumber(newVal) {
      this.currentPage = newVal;
    },
    setTotalPages(num) {
      this.totalPages = num;
    },
  }
});
