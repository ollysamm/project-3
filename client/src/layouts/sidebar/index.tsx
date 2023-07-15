import React from "react";
import { motion } from "framer-motion"

import { Logo } from "../../components/logo"
import { LoggedInUser } from "../../components/loggedInUser";
import { NewChat } from "../../components/newChat";
import { ChatHistory } from "../../components/chatHistory";
import { Separator } from "../../components/separator";
import { SideFooter } from "../../components/sideFooter"

function Sidebar() {
  return (
    <div>
      <motion.div className="flex flex-col justify-between bg-hol-blue-dark text-white shadow-xl z-[999] w-64 max-w-64 p-3 h-screen overflow-hidden md:relative fixed">
        <div>
          <Logo />
          <LoggedInUser />
          <ChatHistory />
        </div>
        
        <div>
          <Separator />
          <SideFooter />
        </div>
      </motion.div>
    </div>
  )
}

export default Sidebar