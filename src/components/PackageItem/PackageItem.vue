<template>
  <div
    class="package-item"
    @click="() => openModalHandler(name, type)"
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
import SpanWithTitle from '../sharable/SpanWithTitle/SpanWithTitle.vue';

import { useModalStore } from '@/stores/modalStore';
import { usePackagesStore } from '@/stores/packagesStore';

import type { IPackagesItemProps } from '@/core/types/components/interfaces';
import type { IImages } from '@/core/types/general';
import { PACKAGE_TYPES } from '@/core/enums/api';
import { IMGS } from '@/core/constants';

import { computed } from 'vue';
import { MODAL_NAMES } from '@/core/enums/components';
import { storeToRefs } from 'pinia';

const { bandwidth, type } = defineProps<IPackagesItemProps>();

const { addModal } = useModalStore();
const {
  getSinglePackageData
} = storeToRefs(usePackagesStore());

const packageWeight = computed<string>(() => `${Math.floor(bandwidth / 1000000)} Mb`);
const packageImg = computed<IImages>(() => {
  return (type === PACKAGE_TYPES.NPM) ? IMGS.npm_logo : IMGS.github_logo;
});

async function openModalHandler(packageName: string, type: PACKAGE_TYPES) {
  const isPackageFetched = await usePackagesStore().fetchSinglePackage(packageName, type);

  if (!isPackageFetched) return;

  addModal(MODAL_NAMES.SINGLE_PACKAGE, { [MODAL_NAMES.SINGLE_PACKAGE]: getSinglePackageData.value });
};
</script>

<style scoped lang="scss">
@import './PackageItem.scss';
</style>