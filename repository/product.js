import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  product: (page, filter ) => {
    if (filter?.length > 0) {
      return `/products?page=${page}&limit=12&filter.category.id=$in:${filter}`
    } else {
      return `/products?page=${page}&limit=12`
    }
  },
  detailproduct: (id) => `/products/${id}`,
  category: () => `/category`,
};

const hooks = {
  getProduct(page, filter) {
    return useSwr(url.product(page, filter), http.get);
  },
  getDetailproduct(id) {
    return useSwr(url.detailproduct(id), http.get);
  },
  getCategory() {
    return useSwr(url.category(), http.get);
  },
};

const api = {
  createProduct: (data) => {
    return http.post(url.product()).send(data);
  },
  updateProduct: (id, data) => {
    return http.put(url.detailproduct(id)).send(data);
  },
};

export const productRepository = { url, hooks, api };
