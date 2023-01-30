import React from "react";
import Dashboard from "../components/Dashboard";
import CMSLayout from "../layouts/CMSLayout";

const Home = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Home;

Home.getLayout = (page) => (
  <CMSLayout children={page} />
);
