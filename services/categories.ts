import routes from "@/utils/routes";
import axios from "axios";
import { useCategoriesStore } from "~/stores/categories";
const servicesCategories = {
  getAll: async () => {
    try {
      const categories = await axios.get(routes.categories.getAll);
      if (categories) {
        useCategoriesStore().getCategories(categories.data);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
export default servicesCategories;
