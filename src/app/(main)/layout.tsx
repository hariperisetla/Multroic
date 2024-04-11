"use client";

import Header from "@/components/main/common/Header";
import Footer from "@/components/main/common/Footer";
import { useAuth } from "@/context/UserContext";
import { redirect } from "next/navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    redirect("/dashboard");
  }

  return (
    <>
      <Header />
      {children}

      <Footer />
    </>
  );
}
