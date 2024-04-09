<template>
  <div
    class="main-table"
  >
    <div class="main-table__filters">
      <Checkbox 
        title="NPM"
        :checkbox-value="PACKAGE_TYPES.NPM"
        @change="checkboxChangeHandler"
      />

      <Checkbox 
        title="GitHub"
        :checkbox-value="PACKAGE_TYPES.GH"
        @change="checkboxChangeHandler"
      />
    </div>
    <slot />

    <Pagination
      @change-page="changePageHandler"
      @next-page="nextPageHandler"
      @prev-page="prevPageHandler"
    />
  </div>
</template>

<script setup lang="ts">
import Pagination from '@/components/sharable/Pagination/Pagination.vue';
import Checkbox from '@/components/sharable/Checkbox/Checkbox.vue';

import { PACKAGE_TYPES } from '@/core/enums/api';

import { usePackagesStore } from '@/stores/packagesStore';
import { storeToRefs } from 'pinia';

const { 
    fetchPackages,
    setPageNumber
} = usePackagesStore();
const { currentPage, totalPages } = storeToRefs(usePackagesStore());

function changePageHandler(num: number) {
  if (currentPage.value === num) return;

  setPageNumber(num);
  fetchPackages();
};

function nextPageHandler() {
  if (currentPage.value === totalPages.value) return;

  setPageNumber(currentPage.value + 1);
  fetchPackages();
};

function prevPageHandler() {
  if (currentPage.value === 1) return;

  setPageNumber(currentPage.value - 1);
  fetchPackages();
};

function checkboxChangeHandler(val: string) {
  console.log('dddd', val);
};
</script>

<style scoped lang="scss">
@import './MainTableLayout.scss';
</style>