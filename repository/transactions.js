import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  transaction: (page) => `/transactions?page=${page}&limit=12`,
  detailTransaction: (id) => `/transactions/${id}`,
  payment: (id) => `/transactions/payment/${id}`,
  delivery: (id) => `/transactions/delivery/${id}`,
  accepted: (id) => `/transactions/accepted/${id}`,
  cancelled: (id) => `/transactions/canclled/${id}`,
};

const hooks = {
  getTransaction(page) {
    return useSwr(url.transaction(page), http.get);
  },
  getDetailTransaction(id) {
    return useSwr(url.detailTransaction(id), http.get);
  },
};

const api = {
  updatePayment: (id) => {
    return http.put(url.payment(id));
  },
  updateDelivery: (id) => {
    return http.put(url.delivery(id));
  },
  updateAccepted: (id) => {
    return http.put(url.accepted(id));
  },
  updateCancelled: (id) => {
    return http.put(url.cancelled(id));
  },
};

export const transactionRepository = { url, hooks, api };
