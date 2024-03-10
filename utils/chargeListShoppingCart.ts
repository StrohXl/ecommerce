import Cookies from "js-cookie";
export default function () {
  const cookie = Cookies.get("ShoppingCart");
  if (cookie) {
    const list = JSON.parse(Cookies.get("ShoppingCart"));
    useShoppingCart().chargeProductsInShoppingCart(list);
  }
}
