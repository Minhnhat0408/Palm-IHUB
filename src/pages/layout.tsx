import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/header";

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
    </div>
  );
}
