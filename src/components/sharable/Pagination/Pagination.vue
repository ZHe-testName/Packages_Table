<template>
  <div
    class="pagination"
  >
    <div 
      :class="`pagination__arrow left ${currentPage > 1 ? '' : 'disabled'}`"
      @click="currentPage > 1 && emit('prev-page')"
    />

    <ul class="pagination__items">
      <li
        v-for="item in paginationItems"
      >
        <PaginationItem
          v-if="item.num > 0"
          :is-active="item.isActive"
          :num="item.num"
          @click="() => emit('change-page', item.num)"
        />

        <span 
          v-else
          class="pagination__items--divider"
        >...</span>
      </li>
    </ul>

    <div 
      :class="`pagination__arrow right ${currentPage !== totalPages ? '' : 'disabled'}`"
      @click="currentPage !== totalPages && emit('next-page')"
    />
  </div>
</template>

<script setup lang="ts">
import PaginationItem from './PaginationItem/PaginationItem.vue';

import type {
  IPaginationEmits,
  IPaginationItemProps
} from '@/core/types/components/interfaces';

import { usePackagesStore } from '@/stores/packagesStore';
import { storeToRefs } from 'pinia';

import type { ComputedRef } from 'vue';
import { computed } from 'vue';

const { currentPage, totalPages } = storeToRefs(usePackagesStore());

const emit = defineEmits<IPaginationEmits>();

// calculation need's to compute pagination items array 
// for correct pagination appearance according to current page number
const paginationItems: ComputedRef<IPaginationItemProps[]> = computed(() => {
  const items = Array.from(Array(7).keys());

  if (currentPage.value <= 2 || currentPage.value  >= (totalPages.value - 1)) {
    return items.map((i, _, arr) => {
      if (i < 3) {
        const number = i + 1;
        return createItem(number, number === currentPage.value );
      };

      if (i === 3) return createItem(0, false);

      const number = totalPages.value - (arr.length - ++i);

      return createItem(number, number === currentPage.value );
    });
  };
  
  return items.map(i => {
    if (i === 0 || i === 6) return createItem(i === 0 ? 1 : totalPages.value , false);
    if (i === 1 || i === 5) return createItem(0, false);

    const number = currentPage.value  + (i - 3);

    return createItem(number, number === currentPage.value );
  });
});

function createItem(num: number, isActive: boolean): IPaginationItemProps {
  return ({num, isActive});
};
</script>

<style scoped lang="scss">
@import './Pagination.scss';
</style>