import { defineStore } from "pinia";
import ProductShoppingCart from "~/types/productShoppingCart";
export const useShoppingCart = defineStore("shoppingCart", {
  state: () => ({
    shoppingCart: [],
    shoppingCartLength: 0,
    shoppingCartPriceTotal: 0,
  }),
  getters: {},
  actions: {
    addProductInShoppingCart(item: ProductShoppingCart) {
      const product = this.shoppingCart.find((i) => i.id == item.product.id);
      if (product) {
        product.cuantity = item.cuantity;
      } else {
        this.shoppingCart.push(item);
      }
      this.shoppingCartLength = this.shoppingCart.reduce(
        (acc, cur) => acc + cur.cuantity,
        0
      );
      this.shoppingCartPriceTotal = this.shoppingCart.reduce(
        (acc, cur) => acc + cur.cuantity * cur.product.price,
        0
      );
    },
    removeProductInShoppingCart(id: number) {
      const newShoppingCart = this.shoppingCart.filter((i) => i.id !== id);
      this.shoppingCart = newShoppingCart;
    },
    removeAllProductInShoppingCart() {
      this.shoppingCart.splice(0, this.shoppingCartLength);
      this.shoppingCartLength = 0
      this.shoppingCartPriceTotal = 0
    },
  },
});
