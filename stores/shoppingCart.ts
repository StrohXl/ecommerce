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
      const product = this.shoppingCart.find(
        (i) => i.product.id == item.product.id
      );
      if (product) {
        notifications.shoppingCart.modify();
        product.cuantity = item.cuantity;
      } else {
        notifications.shoppingCart.add();
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
      const newShoppingCart = this.shoppingCart.filter(
        (i) => i.product.id != id
      );
      this.shoppingCart = newShoppingCart;
      this.updatedShoppingCartLength();
      this.updatedShoppingCartPriceTotal();
      createCookieShoppingCart();
      notifications.shoppingCart.delete();
    },
    removeAllProductInShoppingCart() {
      notifications.shoppingCart.deleteAll();
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
