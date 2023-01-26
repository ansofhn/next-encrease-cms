import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  user: (page) => `/users?page=${page}&limit=10`,
  detailUser: (id) => `/users/${id}`,
  createUser: () => "/auth/register",
};

const hooks = {
  getUser(page) {
    return useSwr(url.user(page), http.get);
  },
  getDetailUser(id) {
    return useSwr(url.detailUser(id), http.get);
  },
};

const api = {
  createUser: (data) => {
    return http.post(url.createUser().send(data));
  },
};

export const userRepository = { url, hooks, api };
