import { defineStore } from "pinia";
import type { State, Getters, Actions } from "@/core/types/stores/packages_store.interface";

import { PackagesService } from "@/services";
import { PACKAGE_TYPES } from "@/core/enums/api";

export const usePackagesStore = defineStore<'packages', State, Getters, Actions>('packages', {
  state: () => ({
    packages: [],
    currentPage: 1,
    packagesLimit: 10,
    totalPages: 0,
    packageType: [],
    singlePackage: null,
  }),
  getters: {
    getSinglePackageData(state) {
      if (!state.singlePackage) return;

      const { name, type, tags, versions } = state.singlePackage;

      return {
        name,
        type,
        tags: Object.keys(tags).length ? tags : undefined,
        versions: versions.map(v => v.version),
      };
    },
  },
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
      if (type === PACKAGE_TYPES.NPM) {
        this.singlePackage = (await PackagesService.fetchNpmPackage(packageName))?.data || null;

        return true;
      };

      this.singlePackage = (await PackagesService.fetchGitHubPackage(packageName))?.data || null;

      return true;
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
