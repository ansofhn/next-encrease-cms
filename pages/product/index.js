import React from "react";
import Product from "../../components/Product";
import CMSLayout from "../../layouts/CMSLayout";

const Products = () => {
  return (
    <div>
      <Product />
    </div>
  );
};

export default Products;

Products.getLayout = (page) => <CMSLayout children={page} />;
