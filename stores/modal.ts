import { defineStore } from "pinia";
export const useModalStore = defineStore("modal", {
  state: () => ({
    modalFavorite: false,
  }),
  getters: {},
  actions: {
    openModalFavorite() {
      this.modalFavorite = true;
    },
    closeModalFavorite() {
      this.modalFavorite = false;
    },
  },
});
