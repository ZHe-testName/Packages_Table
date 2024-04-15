import { defineStore } from 'pinia';
import { markRaw } from 'vue';

import type { State, Getters, Actions } from '../core/types/stores/modal_store.interface';
import { MODALS_CONFIG } from '@/core/constants';

export const useModalStore = defineStore<'modal', State, Getters, Actions>('modal', {
  state: () => ({
    modals: markRaw(MODALS_CONFIG),
    activeModal: null,
    activeModalContext: null, 
  }),
  getters: {
    getContext: state => {
      if (!state.activeModal?.name || !state.activeModalContext) return null;

      return state.activeModalContext[state.activeModal.name];
    },
  },
  actions: {
    addModal(name, context) {
      const target = this.modals?.find(m => m.name === name);
      if (!target) return;

      if (!context) {
        this.activeModalContext = null;
      } else {
        this.activeModalContext = context;
      };
      
      this.activeModal = target;
    },
    removeModal() {
      this.activeModal = null;
      this.activeModalContext = null;
    },
  }
});