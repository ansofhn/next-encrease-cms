import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { TokenUtil } from "../utils/token";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    TokenUtil.loadToken();
    if (TokenUtil.access_token) {
      router.push("/dashboard");
    } else {
      router.push("/auth/login");
    }
  }, []);
  return;
};

export default Home;
