import Head from "next/head";
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { authentication } from "../utils/authentication";

const CMSLayout = ({ children }) => {
  const [token, setToken] = useState();

  useEffect(() => {
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
