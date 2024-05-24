import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="h-full w-screen">
      <Header />
      <Outlet />
      {children}
    </div>
  );
}
