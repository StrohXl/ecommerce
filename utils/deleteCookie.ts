import Cookies from "js-cookie";
export default function () {
  Cookies.remove("client");
  useClientStore().clientDisabled();
}
