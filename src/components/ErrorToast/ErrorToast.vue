<template>
  <div
    class="error-toast"
  >
    <h6>ERROR!</h6>

    <p>{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/stores/systemStore';
import { storeToRefs } from 'pinia';

const { errorMessage } = storeToRefs(useSystemStore());
</script>

<style scoped lang="scss">
@import './ErrorToast.scss';
</style>