<template>
  <Header />

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import Header from '@/components/Header/Header.vue';

import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped lang="scss">
main {
  padding: $unit3 $unit4;
}
</style>
