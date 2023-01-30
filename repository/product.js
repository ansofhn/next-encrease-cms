import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  product: () => `/products`,
  detailproduct: (id) => `/products/${id}`,
};

const hooks = {
  getProduct() {
    return useSwr(url.product(), http.get);
  },
  getDetailproduct(id) {
    return useSwr(url.detailproduct(id), http.get);
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
