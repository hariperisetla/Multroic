// Importing the Header and Footer components from the main directory
import { Header, Footer } from "@/components/main";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/UserContext";
import { useRouter } from "next/router";

// Defining the MainLayout component with children as its parameter
const MainLayout = ({ children }) => {
  const { currentUser } = useAuth();

  const [pageLoad, setPageLoad] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setPageLoad(true);
    if (currentUser) router.replace("/app/dashboard");
    else {
      setPageLoad(false);
    }
  }, [currentUser, router]);

  // Returning the Header component, children wrapped in the main tag with a top padding of 16, and the Footer component
  return (
    <>
      {pageLoad ? (
        "loading"
      ) : (
        <>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

// Exporting the MainLayout component
export default MainLayout;
