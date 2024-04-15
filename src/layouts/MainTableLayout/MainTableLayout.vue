<template>
  <div
    class="main-table"
  >
    <!-- <div class="main-table__filters">
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
    </div> -->
    <slot />

    <Pagination
      v-if="packages.length"
      @change-page="changePageHandler"
      @next-page="nextPageHandler"
      @prev-page="prevPageHandler"
    />
  </div>
</template>

<script setup lang="ts">
import Pagination from '@/components/sharable/Pagination/Pagination.vue';
// import Checkbox from '@/components/sharable/Checkbox/Checkbox.vue';

import { usePackagesStore } from '@/stores/packagesStore';
import { storeToRefs } from 'pinia';

import { useRouter } from 'vue-router';

const router = useRouter();

const { 
    setPageNumber,
    searchPackages
} = usePackagesStore();

const { 
  currentPage,
  totalPages,
  packages,
  searchValue
} = storeToRefs(usePackagesStore());

function changePageHandler(num: number) {
  if (currentPage.value === num) return;

  router.push({ params: { page: num }, query: { search: searchValue.value }  });

  setPageNumber(num);
  searchPackages();
};

function nextPageHandler() {
  if (currentPage.value === totalPages.value) return;

  router.push({ params: { page: currentPage.value + 1 }, query: { search: searchValue.value } });

  setPageNumber(currentPage.value + 1);
  searchPackages();
};

function prevPageHandler() {
  if (currentPage.value === 1) return;

  router.push({ params: { page: currentPage.value - 1 }, query: { search: searchValue.value }  });

  setPageNumber(currentPage.value - 1);
  searchPackages();
};
</script>

<style scoped lang="scss">
@import './MainTableLayout.scss';
</style>