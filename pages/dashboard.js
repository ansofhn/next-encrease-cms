import React from "react";
import Dashboard from "../components/Dashboard";
import CMSLayout from "../layouts/CMSLayout";

const dashboard = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default dashboard;

dashboard.getLayout = (page) => <CMSLayout children={page} />;
