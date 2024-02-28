import Cookies from "js-cookie";
export default function () {
  Cookies.set("client", "asdfasdfas");
  useClientStore().clientActive()
  setTimeout(()=>{
    useRouter().push('/')
  },1000)
}
