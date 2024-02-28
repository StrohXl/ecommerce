import Cookies from "js-cookie";
import { useClientStore } from "~/stores/client";
export default function () {
  const client = Cookies.get("client");
  if (client) {
    useClientStore().clientActive();
  } else {
    useClientStore().clientDisabled();
  }
}
