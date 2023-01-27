import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  categories: (page) => `/category?page=${page}`,
};

const hooks = {
  getCategories(page) {
    return useSwr(url.categories(page), http.get);
  },
};

export const categoryRepository = { url, hooks };
