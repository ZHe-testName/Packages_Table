<template>
  <header
    class="app-header"
  >
    <div 
      class="app-header__logo"
    >
      <img 
        :src="IMGS.main_logo.src"
        :alt="IMGS.main_logo.alt"
      />

      <span>
        Packages Observer
      </span>
    </div>

    <div 
      class="app-header__search"
    >
      <Search />
    </div>
  </header>
</template>

<script setup lang="ts">
import Search from '@/components/sharable/Search/Search.vue';

import { IMGS } from '@/core/constants';
</script>

<style scoped lang="scss">
@import './Header.scss';
</style>