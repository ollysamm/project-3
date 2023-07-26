import React from "react";
import logoImage from "../../assets/img/wendy.png";
import '../../index.css'

export function Logo() {
  return (
    <div className="mb-8 text-4xl flex items-center">
      <span className=" mr-2"><h1>WendyAI</h1></span>
      <img src={logoImage} alt="Logo" className="avatar" />
    </div>
  );
}
