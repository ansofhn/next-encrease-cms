import React from "react";
import User from "../../components/User";
import CMSLayout from "../../layouts/CMSLayout";

const user = () => {
  return (
    <div>
      <User />
    </div>
  );
};

export default user;

user.getLayout = (page) => (
  <CMSLayout children={page} />
);