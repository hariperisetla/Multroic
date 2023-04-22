import { Header, Footer } from "@/components/Layouts/Main";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
