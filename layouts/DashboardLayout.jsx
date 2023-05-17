import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <main className="pt-16">{children}</main>
    </>
  );
};

export default DashboardLayout;
