import Head from "next/head";
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { authentication } from "../utils/authentication";
import { TokenUtil } from "../utils/token";
import { useRouter } from "next/router";

const CMSLayout = ({ children }) => {
  const [token, setToken] = useState();
  const router = useRouter();
  useEffect(() => {
    TokenUtil.loadToken();
    if (!TokenUtil.access_token) {
      router.push("/auth/login");
    }
    setToken(authentication.isVerified());
  }, []);

  return (
    <div className="bg-softWhite">
      <Head>
        <title>Encrease - CMS</title>
      </Head>
      <Navbar />
      {token && children}
    </div>
  );
};

export default CMSLayout;
