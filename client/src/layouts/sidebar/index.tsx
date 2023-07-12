
import { NavLink, useLocation, useRoutes } from "react-router-dom";
import { motion } from "framer-motion"

import { Logo } from "../../components/logo"
import { ChatHistory } from "../../components/chatHistory";
import { SideFooter } from "../../components/sideFooter"

function Sidebar() {
  return (
    <div>
      <motion.div className="bg-hol-blue text-white shadow-xl z-[999] w-64 max-w-64 p-4 h-screen overflow-hidden md:relative fixed">
        <Logo />
        <ChatHistory />
        <SideFooter />
      </motion.div>
    </div>
  )
}

export default Sidebar