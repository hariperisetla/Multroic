import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/UserContext";
import { useRouter } from "next/router";
import SideBar from "@/components/dashboard/SideBar";
import Header from "@/components/dashboard/Header";
import Footer from "@/components/dashboard/Footer";

const DashboardLayout = ({ children }) => {
  const { currentUser } = useAuth();

  const router = useRouter();

  const [pageLoad, setPageLoad] = useState(false);

  console.log(currentUser);

  useEffect(() => {
    setPageLoad(true);
    if (!currentUser) router.push("/signin");
    else {
      setPageLoad(false);
    }
  }, [currentUser, router]);

  return (
    <>
      <SideBar />
      <main className="ml-64 flex-grow">
        <Header />
        <div className="flex flex-col h-screen mt-5 text-white flex-grow">
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
