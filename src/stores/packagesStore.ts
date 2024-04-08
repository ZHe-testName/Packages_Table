import { defineStore } from "pinia";
import type { State, Getters, Actions } from "@/core/types/stores/packages_store.interface";

import { useSystemStore } from "./systemStore";
import { PackagesService } from "@/services";

export const usePackagesStore = defineStore<'packages', State, Getters, Actions>('packages', {
  state: () => ({
    packages: [],
    currentPage: 1,
    packagesLimit: 10,
    packageType: undefined,
  }),
  actions: {
    async fetchPackages(params) {
      const { setIsLoading } = useSystemStore();

      setIsLoading(true);

      this.packages = (await PackagesService.fetchPackages({
        ...params,
        type: this.packageType,
        page: this.currentPage,
        limit: this.packagesLimit,
      }))?.data || [];

      setIsLoading(false);
    },
    setPageNumber(newVal) {
      this.currentPage = newVal;
    },
  }
});
