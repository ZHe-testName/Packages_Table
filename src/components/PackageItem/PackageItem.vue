<template>
  <div
    class="package-item"
  >
    <img 
      :alt="packageImg.alt" 
      :src="packageImg.src"
    >

    <SpanWithTitle 
      title="Type"
      :text="type"
    />

    <SpanWithTitle 
      title="Name"
      :text="name"
    />

    <SpanWithTitle 
      title="Weight"
      :text="packageWeight"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SpanWithTitle from '../sharable/SpanWithTitle/SpanWithTitle.vue';

import type { IPackagesItemProps } from '@/core/types/components/interfaces';
import type { IImages } from '@/core/types/general';
import { PACKAGE_TYPES } from '@/core/enums/api';
import { IMGS } from '@/core/constants';

const { bandwidth, type } = defineProps<IPackagesItemProps>();

const packageWeight = computed<string>(() => `${Math.floor(bandwidth / 1000000)} Mb`);
const packageImg = computed<IImages>(() => {
  if (type === PACKAGE_TYPES.NPM) return IMGS.npm_logo;

  return IMGS.github_logo
});
</script>

<style scoped lang="scss">
@import './PackageItem.scss';
</style>