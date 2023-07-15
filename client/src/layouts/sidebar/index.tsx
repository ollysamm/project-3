import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { Logo } from "../../components/logo";
import { LoggedInUser } from "../../components/loggedInUser";
import { ChatHistory } from "../../components/chatHistory";
import { Separator } from "../../components/separator";
import { SideFooter } from "../../components/sideFooter";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);

      if (newWindowWidth < 768) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div>
      {showSidebar ? (
        <div className="flex flex-col justify-between bg-hol-blue-dark text-white shadow-xl z-[999] w-64 max-w-64 p-3 pt-4 h-screen overflow-auto md:relative fixed">
          <div>
            {showSidebar && windowWidth < 768 && (
              <div className="flex justify-end mb-3">
                <button className="close-icon" onClick={closeSidebar}>
                  <IoClose size={24} />
                </button>
              </div>
            )}
            <Logo />
            <LoggedInUser />
            <ChatHistory />
          </div>

          <div>
            <Separator />
            <SideFooter />
          </div>
        </div>
      ) : (
        <button className="hamburger-icon p-2" onClick={toggleSidebar}>
          <BiMenu size={24} />
        </button>
      )}
    </div>
  );
}

export default Sidebar;
