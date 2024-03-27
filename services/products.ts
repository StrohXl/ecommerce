import routes from "@/utils/routes";
import axios from "axios";
import { useCategoriesStore } from "~/stores/categories";
const servicesProducts = {
  getAll: async () => {
    try {
      const products = await axios.get(routes.products.getAll);
      return products;
    } catch (error) {
      console.log(error);
    }
  },
};
export default servicesProducts;
