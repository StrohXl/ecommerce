import { defineStore } from "pinia";
export const useModalStore = defineStore("modal", {
  state: () => ({
    modalFavorite: false,
    modalShop: false,
  }),
  getters: {},
  actions: {
    openModalFavorite() {
      this.modalFavorite = true;
    },
    closeModalFavorite() {
      this.modalFavorite = false;
    },
    openModalShop() {
      if(useClientStore().client == 'false'){
        this.modalShop = true;
      }
    },
    closeModalShop() {
      this.modalShop = false;
    },
  },
});
