<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <Footer />

  <ModalLayout
    v-if="activeModal"
    :key="activeModal.name"
    :name="activeModal.name"
  >
    <component :is="toRaw(activeModal.modal)" />
  </ModalLayout>

  <LoaderLayout 
    v-if="isLoading"
  /> 

  <ErrorToast 
    v-if="getIsErrorShow"
  />
</template>

<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import LoaderLayout from '@/layouts/LoaderLayout/LoaderLayout.vue';
import ModalLayout from '@/layouts/ModalLayout/ModalLayout.vue';
import ErrorToast from '@/components/ErrorToast/ErrorToast.vue';

import { RouterView } from 'vue-router';

import { useSystemStore } from './stores/systemStore';
import { useModalStore } from './stores/modalStore';
import { storeToRefs } from 'pinia';
import { toRaw } from 'vue';

const { isLoading, getIsErrorShow } = storeToRefs(useSystemStore());
const { activeModal } = storeToRefs(useModalStore());
</script>

<style scoped lang="scss">
@import './App.scss';
</style>
