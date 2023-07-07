import React from "react";

import { Logo } from "../../components/logo";
import { SideNavbar } from "../../components/SideNavbar";

export function SideMenu() {
  return (
    <div className="w-64">
      <Logo />
      <SideNavbar />
  </div>
  )
}