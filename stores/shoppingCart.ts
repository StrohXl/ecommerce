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
      const product = this.shoppingCart.find((i) => i.product.id == item.product.id);
      console.log(product)
      if (product) {
        product.cuantity = item.cuantity;
      } else {
        this.shoppingCart.push(item);
      }
      createCookieShoppingCart();
      this.updatedShoppingCartLength();
      this.updatedShoppingCartPriceTotal();
    },
    updatedShoppingCartLength() {
      this.shoppingCartLength = this.shoppingCart.reduce(
        (acc, cur) => acc + cur.cuantity,
        0
      );
    },
    updatedShoppingCartPriceTotal() {
      this.shoppingCartPriceTotal = this.shoppingCart.reduce(
        (acc, cur) => acc + cur.cuantity * cur.product.price,
        0
      );
    },
    removeProductInShoppingCart(id: number) {
      console.log(id)
      const newShoppingCart = this.shoppingCart.filter((i) => i.product.id != id);
      console.log(newShoppingCart)
      this.shoppingCart = newShoppingCart;
      this.updatedShoppingCartLength();
      this.updatedShoppingCartPriceTotal();
      createCookieShoppingCart();
    },
    removeAllProductInShoppingCart() {
      this.shoppingCart.splice(0, this.shoppingCartLength);
      this.shoppingCartLength = 0;
      this.shoppingCartPriceTotal = 0;
      createCookieShoppingCart();
    },
    chargeProductsInShoppingCart(array: []) {
      this.shoppingCart = array;
      this.updatedShoppingCartLength();
      this.updatedShoppingCartPriceTotal();
    },
  },
});
