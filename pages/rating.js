import React from "react";
import Rating from "../components/Rating";
import CMSLayout from "../layouts/CMSLayout";

const rating = () => {
  return (
    <div>
      <Rating />
    </div>
  );
};

export default rating;

rating.getLayout = (page) => (
  <CMSLayout children={page} />
);