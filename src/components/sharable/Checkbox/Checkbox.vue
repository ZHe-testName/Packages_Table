<template>
  <label
    class="checkbox"
  >
    <input 
      type="checkbox"
      :value="checkboxValue"
      @change="changeHandler"
    >

    <div class="checkbox__indicator"/>

    <span class="checkbox__title">{{ title }}</span>
  </label>
</template>

<script setup lang="ts">
import type { PACKAGE_TYPES } from '@/core/enums/api';
import type { ICheckboxEmits, ICheckboxProps } from '@/core/types/components/interfaces';

const { checkboxValue } = defineProps<ICheckboxProps>();
const emit = defineEmits<ICheckboxEmits>();

function changeHandler(e: Event) {
  const target = e.target as HTMLInputElement;

  if (!target) return;

  emit('change', target.value as PACKAGE_TYPES, target.checked);
};
</script>

<style scoped lang="scss">
@import './Checkbox.scss';
</style>