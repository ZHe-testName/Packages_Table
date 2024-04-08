<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';

import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped lang="scss">
@import './App.scss';
</style>
