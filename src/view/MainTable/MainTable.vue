<template>
  <div
    class="main-table"
  >
    <MainTableLayout>
      <ul
        v-if="packages?.length"
      >
        <li
          v-for="item in packages"
          :key="item.package.name"
        >
          <PackageItem
            :name="item.package.name"
            :version="item.package.version"
            :description="item.package.description"
          />
        </li>
      </ul>

      <div 
        v-else
        class="main-table__empty"
      >
        <h2>There are no results :(</h2>
      </div>
    </MainTableLayout>
  </div>
</template>

<script setup lang="ts">
import MainTableLayout from '@/layouts/MainTableLayout/MainTableLayout.vue';
import PackageItem from '@/components/PackageItem/PackageItem.vue';

import { usePackagesStore } from '@/stores/packagesStore';

import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const route = useRoute();

const { 
    searchPackages,
    setPageNumber,
    setSearchString
} = usePackagesStore();

const { packages } = storeToRefs(usePackagesStore());

onMounted(() => {
  setPageNumber(+route.params?.page || 1);
  setSearchString(route.query?.search as string || '')
  
  searchPackages();
});
</script>

<style scoped lang="scss">
@import './MainTable.scss';
</style>