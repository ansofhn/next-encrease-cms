import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  user: (page, filter, search ) => `/users?page=${page}&limit=10${filter ? `&filter.role.name=$in:${filter}`: ``}&search=${search}`,
  detailUser: (id) => `/users/${id}`,
  createUser: () => "/auth/register",
};

const hooks = {
  getUser(page, filter, search) {
    return useSwr(url.user(page, filter, search), http.get);
  },
  getDetailUser(id) {
    return useSwr(url.detailUser(id), http.get);
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
