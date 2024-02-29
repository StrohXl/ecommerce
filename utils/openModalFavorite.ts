import { useModalStore } from "~/stores/modal";

export default function () {
  const client = useClientStore().client;
  if (client == 'true') {
    useRouter().push("/favoritos");
  } else {
    useModalStore().openModalFavorite();
  }
}
