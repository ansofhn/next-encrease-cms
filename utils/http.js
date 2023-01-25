import { appConfig } from "../config/app";

const SuperAgent = require("superagent");

export const http = {
  get: async (url) => {
    try {
      let req = SuperAgent.get(`${appConfig.apiUrl}${url}`);
      const resp = await req;
      return resp?.body;
    } catch (e) {
      console.log(e.message);
      return;
    }
  },
};
