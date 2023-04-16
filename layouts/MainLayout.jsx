import { Header, Footer } from "@/components/Layouts/Main";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
