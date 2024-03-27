import { defineStore } from "pinia";
export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    categories: [],
  }),
  getters: {},
  actions: {
    getCategories(array: []) {
      this.categories = array;
    },
  },
});
