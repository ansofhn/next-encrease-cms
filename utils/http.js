import { appConfig } from "../config/app";

const SuperAgent = require("superagent");

export const http = {
  get: async (url) => {
    try {
      let req = SuperAgent.get(`${appConfig.apiUrl}${url}`);
      req = req.set(
        "Authorization",
        "Bearer " + localStorage.getItem("access_token")
      )
      const resp = await req;
      return resp?.body;
    } catch (e) {
      console.log(e.message);
      return;
    }
  },
  put: async (url, data) => {
    try {
      let req = SuperAgent.put(`${appConfig.apiUrl}${url}`);
      const resp = await req;
      return resp?.body;
    } catch (e) {
      console.log(e.message);
      return;
    }
  },
  post: async (url, data) => {
    try {
      let req = SuperAgent.post(`${appConfig.apiUrl}${url}`);
      req = req.set(
        "Authorization",
        "Bearer " + localStorage.getItem("access_token")
      )
      const resp = await req;
      return resp?.body;
    } catch (e) {
      console.log(e.message);
      return;
    }
  },
  del: async (url) => {
    try {
      let req = SuperAgent.del(`${appConfig.apiUrl}${url}`);
      const resp = await req;
      return resp?.body;
    } catch (e) {
      console.log(e.message);
      return;
    }
  },
};
