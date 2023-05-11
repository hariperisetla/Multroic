import { Header, Footer } from "@/components/Layouts/Main";
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

    nav
      ? document.main.classList.add("overflow-hidden")
      : document.main.classList.remove("overflow-hidden");
  };

  return (
    <div>
      <Header handleResize={handleResize} handleNav={handleNav} nav={nav} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
