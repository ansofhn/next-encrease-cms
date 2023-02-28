import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  report: () => `/dashboard`,
};

const hooks = {
  getReport() {
    return useSwr(url.report(), http.get);
  },
};

export const reportRepository = { url, hooks };
