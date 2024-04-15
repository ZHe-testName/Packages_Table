<template>
  <div
    class="search"
  >
    <input 
      ref="searchInput"
      type="text"
      placeholder="Search npm packages"
      :value="searchValue"
      v-debounce:700ms="searchHandler"
    >

    <img 
      :alt="IMGS.magnifier.alt"
      :src="IMGS.magnifier.src"
    />
  </div>
</template>

<script setup lang="ts">
import { usePackagesStore } from '@/stores/packagesStore';

import { IMGS } from '@/core/constants';

import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const router = useRouter();

const { 
  searchPackages,
  setSearchString,
  setPageNumber
} = usePackagesStore();

const { searchValue } = storeToRefs(usePackagesStore());

function searchHandler(val: string) {
  router.push({ params: { page: 1 }, query: { search: val } });

  setPageNumber(1);
  setSearchString(val);
  searchPackages();
};
</script>

<style scoped lang="scss">
@import './Search.scss';
</style>