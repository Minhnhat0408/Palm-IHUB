import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className=" bg-background ">
      <Header />
      <Outlet />
      {children}
      <Footer />
    </div>
  );
}
