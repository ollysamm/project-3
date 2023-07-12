import React, { ReactNode } from "react";
import Sidebar from "./sidebar";

interface RootLayoutProps {
  children: ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 py-8 bg-hol-grey-light">{children}</main>
    </div>
  );
}

export default RootLayout;