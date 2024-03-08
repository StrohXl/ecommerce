import { defineStore } from "pinia";
import ProductShoppingCart from "~/types/productShoppingCart";
export const useShoppingCart = defineStore("shoppingCart", {
  state: () => ({
    shoppingCart: [],
    shoppingCartLength: 0,
  }),
  getters: {},
  actions: {
    addProductInShoppingCart(item: ProductShoppingCart) {
      const array = this.shoppingCart;
      array.push(item);
      const cuantity = array.reduce((acc, item) => acc + item.cuantity);
      console.log(cuantity)
    },
    removeProductInShoppingCart(id: number) {
      const newShoppingCart = this.shoppingCart.filter((i) => i.id !== id);
      this.shoppingCart = newShoppingCart;
    },
  },
});
