import React from "react";
import Transaction from "../components/Transaction";
import CMSLayout from "../layouts/CMSLayout";

const transaction = () => {
  return (
    <div>
      <Transaction />
    </div>
  );
};

export default transaction;

transaction.getLayout = (page) => (
  <CMSLayout children={page} />
);