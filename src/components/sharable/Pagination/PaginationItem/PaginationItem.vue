<template>
  <div
    :class="`pagination-item ${isActive ? 'active' : ''}`"
  >
    <span class="pagination-item__num">
      {{ num }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { IPaginationItemProps } from '@/core/types/components/interfaces';

defineProps<IPaginationItemProps>();
</script>

<style scoped lang="scss">
@import './PaginationItem.scss';
</style>