<template>
  <div
    class="single-package"
  >
    <div class="single-package__header">
      <img 
        :src="packageImg.src" 
        :alt="packageImg.alt"
      >

      <h3>{{ data?.single_package?.name }}</h3>

      <button
        @click="() => useModalStore().removeModal()"
      ></button>
    </div>

    <div class="single-package__body">
      <span class="single-package__body--type">{{ data?.single_package?.type }}</span>

      <div 
        v-if="data?.single_package?.tags"
        class="single-package__body--tags"
      >
        <h5>Tags:</h5>

        <ul>
          <li
            v-for="tag in Object.entries(data?.single_package?.tags)"
          >
            <span>{{ tag[0] }}:</span>
            
            <span>{{ tag[1] }}</span>
          </li>
        </ul>
      </div>
      
      <div 
        v-if="data?.single_package?.versions?.length"
        class="single-package__body--versions"
      >
        <h5>Versions:</h5>

        <ul>
          <li
            v-for="version in data.single_package.versions"
          >
            <TextPill 
              :text="version"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextPill from '@/components/sharable/TextPill/TextPill.vue';

import { IMGS } from '@/core/constants';
import { PACKAGE_TYPES } from '@/core/enums/api';
import type { IImages } from '@/core/types/general';
import { useModalStore } from '@/stores/modalStore';

import { storeToRefs } from 'pinia';

import { computed } from 'vue';

const { activeModalContext: data } = storeToRefs(useModalStore());

const packageImg = computed<IImages>(() => {
  return (data.value?.single_package?.type === PACKAGE_TYPES.NPM) ? IMGS.npm_logo : IMGS.github_logo;
});
</script>

<style scoped lang="scss">
@import './SinglePackageModal.scss';
</style>