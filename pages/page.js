import React from "react";
import Pages from "../components/Pages";
import CMSLayout from "../layouts/CMSLayout";

const page = () => {
  return (
    <div>
      <Pages />
    </div>
  );
};

export default page;

page.getLayout = (page) => (
  <CMSLayout children={page} />
);