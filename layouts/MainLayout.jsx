import { Header, Footer } from "@/components/main";
import React, { useState } from "react";

const MainLayout = ({ children }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setNav(!nav);
    } else return;
  };

  return (
    <>
      <Header handleResize={handleResize} handleNav={handleNav} nav={nav} />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
