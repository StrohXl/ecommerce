import Cookies from "js-cookie";
export default function () {
  const list = JSON.parse(Cookies.get("ShoppingCart"));
  useShoppingCart().chargeProductsInShoppingCart(list);
}
