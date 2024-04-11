<template>
  <div
    class="text-pill"
  >
    <span>{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import type { ITextPillProps } from '@/core/types/components/interfaces';

defineProps<ITextPillProps>();
</script>

<style scoped lang="scss">
@import './TextPill.scss';
</style>