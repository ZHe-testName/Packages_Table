<template>
  <div
    class="main-table"
  >
    <MainTableLayout>
      <ul>
        <li
          v-for="item in packages"
          :key="item.bandwidth"
        >
          <PackageItem
            :bandwidth="item.bandwidth"
            :type="item.type"
            :name="item.name"
          />
        </li>
      </ul>
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
    fetchPackages,
    setPageNumber
} = usePackagesStore();
const { packages } = storeToRefs(usePackagesStore());

onMounted(() => {
  setPageNumber(+route.params?.page || 1);
  
  fetchPackages();
});
</script>

<style scoped lang="scss">
@import './MainTable.scss';
</style>