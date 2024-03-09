import Cookies from "js-cookie";
export default function () {
  Cookies.set("ShoppingCart", JSON.stringify(useShoppingCart().shoppingCart));
}
