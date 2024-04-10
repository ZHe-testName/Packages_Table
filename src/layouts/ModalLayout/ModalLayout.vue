<template>
  <div class="modal_wrap" @click.self="() => removeModal()">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore';

const { removeModal } = useModalStore();
</script>

<style scoped lang="scss">
@import './ModalLayout.scss';
</style>