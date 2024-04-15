<template>
  <div
    class="titled-span"
  >
    <span
      class="titled-span__title"
    >{{ title }}:</span>
    
    <span
      class="titled-span__text"
    >{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import type { ISpanWithTitleProps } from '@/core/types/components/interfaces';

defineProps<ISpanWithTitleProps>();
</script>

<style scoped lang="scss">
@import './SpanWithTitle.scss';
</style>