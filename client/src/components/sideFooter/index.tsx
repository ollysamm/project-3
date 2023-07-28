import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MdOutlineContactSupport } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";



export function SideFooter() {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout();
  };


  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <a href="http://support.wendyai.ollysamm.com" target="_blank" className="flex items-center cursor-pointer">
          <MdOutlineContactSupport />
          <span className="ml-2 text-lg"><h2>Support</h2></span>
        </a>
      </div>

      <div className="mb-2">
        <a href="" className="flex items-center cursor-pointer">
          <FiSettings />
          <span className="ml-2 text-lg"><h2>Account</h2></span>
        </a>
      </div>

      <div className="mb-2">
        <button onClick={handleLogout} className="flex items-center cursor-pointer">
          <CgLogOut />
          <span className="ml-2 text-lg"><h2>Logout</h2></span>
        </button>
      </div>
    </div>
  )
}