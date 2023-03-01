import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  review: (page) => `/review?page=${page}&limit=10`,
  detailReview: (id) => `/review/${id}`,
};

const hooks = {
  getReview(page) {
    return useSwr(url.review(page), http.get);
  },
  getDetailReview(id) {
    return useSwr(url.detailReview(id), http.get);
  },
};

const api = {
  updateReview: (id, data) => {
    return http.put(url.detailReview(id)).send(data);
  },
};

export const ratingRepository = { url, hooks, api };
