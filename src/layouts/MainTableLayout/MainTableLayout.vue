<template>
  <div
    class="main-table"
  >
    <slot />

    <Pagination
      @change-page="changePageHandler"
      @next-page="() => nextPageHandler()"
      @prev-page="() => prevPageHandler()"
    />
  </div>
</template>

<script setup lang="ts">
import Pagination from '@/components/sharable/Pagination/Pagination.vue';

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
</script>

<style scoped lang="scss">
@import './MainTableLayout.scss';
</style>