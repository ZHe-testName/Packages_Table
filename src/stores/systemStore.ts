import { defineStore } from "pinia";
import type { State, Getters, Actions } from "@/core/types/stores/system_store.interface";

export const useSystemStore = defineStore<'system', State, Getters, Actions>('system', {
  state: () => ({
    isLoading: false,
    errorMessage: '',
  }),
  getters: {
    getIsErrorShow() {
      return !!this.errorMessage.length;
    },
  },
  actions: {
    setIsLoading(value) {
      this.isLoading = value;
    },
    setErrorMessages(message) {
      this.errorMessage = message;

      setTimeout(this.clearErrorMessage, 6000);
    },
    clearErrorMessage() {
      this.errorMessage = '';
    },
  }
});
