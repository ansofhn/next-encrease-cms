import useSwr from "swr";
import { http } from "../utils/http";

const url = {
  report: () => `/dashboard`,
  revenue: () => `/dashboard/revenue`,
};

const hooks = {
  getReport() {
    return useSwr(url.report(), http.get);
  },
  getRevenue() {
    return useSwr(url.revenue(), http.get);
  },
};

export const reportRepository = { url, hooks };
