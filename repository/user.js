import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  user: (page) => `/users?page=${page}&limit=10`,
  detailUser: (id) => `/users/${id}`,
  createUser: () => "/auth/register",
  filterUser: (id) => `/users/filter/${id}`,
};

const hooks = {
  getUser(page) {
    return useSwr(url.user(page), http.get);
  },
  getDetailUser(id) {
    return useSwr(url.detailUser(id), http.get);
  },
  getUserFilter(id) {
    return useSwr(url.filterUser(id), http.get);
  },
};

const api = {
  createUser: (data) => {
    return http.post(url.createUser()).send(data);
  },
  updateUser: (id, data) => {
    return http.put(url.detailUser(id)).send(data);
  },
};

export const userRepository = { url, hooks, api };
