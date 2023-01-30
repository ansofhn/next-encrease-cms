import Head from "next/head";
import React from "react";

const LoginRegisterLayout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex items-center justify-center h-screen md:p-4">
        {children}
      </div>
    </div>
  );
};

export default LoginRegisterLayout;
