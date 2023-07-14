import React from "react";
import logoImage from "../../assets/img/wendy.png";

export function Logo() {
  return (
    <div className="mb-8 text-4xl flex items-center">
      <span className="mr-2">wendyAI</span>
      <img src={logoImage} alt="Logo" className="w-12 h-12" />
    </div>
  );
}
