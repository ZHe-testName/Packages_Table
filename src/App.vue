<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <Footer />

  <LoaderLayout 
    v-if="isLoading"
  />  
</template>

<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import LoaderLayout from '@/layouts/LoaderLayout/LoaderLayout.vue';

import { RouterView } from 'vue-router';

import { useSystemStore } from './stores/systemStore';
import { storeToRefs } from 'pinia';

const { isLoading } = storeToRefs(useSystemStore());
</script>

<style scoped lang="scss">
@import './App.scss';
</style>
