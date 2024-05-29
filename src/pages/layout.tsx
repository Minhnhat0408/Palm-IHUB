import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className=" bg-background ">
      <Header />
      <Toaster />
      <Outlet />
      {children}
      <Footer />
    </div>
  );
}
