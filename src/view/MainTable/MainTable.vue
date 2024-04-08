<template>
  <div
    class="main-table"
  >
    <h1>I'm main table</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { usePackagesStore } from '@/stores/packagesStore';

const { fetchPackages } = usePackagesStore();

onMounted(() => {
  fetchPackages();
});
</script>

<style scoped lang="scss">
@import './MainTable.scss';
</style>