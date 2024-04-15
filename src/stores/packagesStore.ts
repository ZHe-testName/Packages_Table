import { defineStore } from "pinia";
import type { State, Getters, Actions } from "@/core/types/stores/packages_store.interface";

import { PackagesService } from "@/services";
import { useRoute } from "vue-router";

export const usePackagesStore = defineStore<'packages', State, Getters, Actions>('packages', {
  state: () => {
    const route = useRoute();

    console.log('RRRR', route);
    return {
      packages: [],
      currentPage: 1,
      packagesLimit: 10,
      totalPages: 0,
      packageType: [],
      singlePackage: null,
      searchValue: '',
    }
  },
  actions: {
    async searchPackages() {
      const data = (await PackagesService.searchNpmPackage({
        text: this.searchValue,
        size: this.packagesLimit,
        from: this.currentPage === 1 ? 0 : 10 * (this.currentPage - 1),
      }))?.data || null;

      if (!data) return;

      const { objects, total } = data;

      this.packages = objects;
      this.totalPages = Math.ceil(total / this.packagesLimit);
    },
    async fetchSinglePackage(packageName, version) {
      this.singlePackage = (await PackagesService.fetchSinglePackage(packageName, version))?.data || null;

      return !!this.singlePackage;
    },
    setSearchString(searchVal) {
      this.searchValue = searchVal;
    },
    setPageNumber(newVal) {
      this.currentPage = newVal;
    },
    setTotalPages(num) {
      this.totalPages = num;
    },
  }
});
