<template>
  <div
    class="search"
  >
    <input 
      type="text"
      placeholder="Search packages"
      v-debounce:700ms="onInputHandler"
    >

    <img 
      :alt="IMGS.magnifier.alt"
      :src="IMGS.magnifier.src"
    />
  </div>
</template>

<script setup lang="ts">
import { IMGS } from '@/core/constants';

function onInputHandler(value: string) {
  console.log('INPUT', value);
};
</script>

<style scoped lang="scss">
@import './Search.scss';
</style>