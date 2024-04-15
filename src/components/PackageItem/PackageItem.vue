<template>
  <div
    class="package-item"
    @click="() => openModalHandler(name, version)"
  >
    <img 
      :alt="IMGS.npm_logo.alt" 
      :src="IMGS.npm_logo.src"
    >

    <div class="package-item__description">
      <h6>{{ name }}</h6>

      <SpanWithTitle 
        title="Version"
        :text="version"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SpanWithTitle from '../sharable/SpanWithTitle/SpanWithTitle.vue';

import { storeToRefs } from 'pinia';
import { useModalStore } from '@/stores/modalStore';
import { usePackagesStore } from '@/stores/packagesStore';

import type { IPackagesItemProps } from '@/core/types/components/interfaces';
import { IMGS } from '@/core/constants';
import { MODAL_NAMES } from '@/core/enums/components';

defineProps<IPackagesItemProps>();

const { addModal } = useModalStore();
const { fetchSinglePackage } = usePackagesStore();

const {
  singlePackage
} = storeToRefs(usePackagesStore());

async function openModalHandler(packageName: string, version: string) {
  const isPackage = await fetchSinglePackage(packageName, version);

  if (!isPackage) return;

  addModal(MODAL_NAMES.SINGLE_PACKAGE, { [MODAL_NAMES.SINGLE_PACKAGE]: singlePackage.value });
};
</script>

<style scoped lang="scss">
@import './PackageItem.scss';
</style>