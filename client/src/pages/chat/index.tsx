import React from "react";

import { SideMenu } from "./SideMenu";
import { MainContent } from "./MainContent";

export function AppContainer() {
  return (
    <div className="flex">
      <SideMenu />
      <MainContent />
  </div>
  )
}