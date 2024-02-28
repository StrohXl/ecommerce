import { defineStore } from "pinia";
export const useClientStore = defineStore("client", {
  state: () => ({
    client: "loading",
    drawerShoppingCart: false,
  }),
  getters: {},
  actions: {
    clientActive() {
      this.client = "true";
    },
    clientDisabled() {
      this.client = "false";
    },
  },
});
