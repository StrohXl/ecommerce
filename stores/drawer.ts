import { defineStore } from "pinia";
export const useDrawerStore = defineStore("drawer", {
  state: () => ({ drawer: false, drawerShoppingCart: false }),
  getters: {},
  actions: {
    openDrawerShopping() {
      this.drawerShoppingCart = true;
      this.drawer = false;
    },
    closeDrawerShoppping() {
      this.drawerShoppingCart = false;
    },
    openDrawer() {
      this.drawer = true;
      this.drawerShoppingCart = false;
    },
    closeDrawer() {
      this.drawer = false;
    },
  },
});
