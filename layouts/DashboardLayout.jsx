import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/UserContext";
import { useRouter } from "next/router";

const DashboardLayout = ({ children }) => {
  const { currentUser } = useAuth();

  const router = useRouter();

  const [pageLoad, setPageLoad] = useState(false);

  useEffect(() => {
    setPageLoad(true);
    if (!currentUser) router.push("/signin");
    else {
      setPageLoad(false);
    }
  }, [currentUser, router]);

  return (
    <>{pageLoad ? "loading" : <main className="pt-16">{children}</main>}</>
  );
};

export default DashboardLayout;
