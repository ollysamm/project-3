
import { MdOutlineContactSupport } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";



export function SideFooter() {
  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <a href="" className="flex items-center cursor-pointer">
          <MdOutlineContactSupport />
          <span className="ml-2 text-lg">Support</span>
        </a>
      </div>

      <div className="mb-2">
        <a href="" className="flex items-center cursor-pointer">
          <FiSettings />
          <span className="ml-2 text-lg">Account</span>
        </a>
      </div>

      <div className="mb-2">
        <a href="" className="flex items-center cursor-pointer">
          <CgLogOut />
          <span className="ml-2 text-lg">Logout</span>
        </a>
      </div>
    </div>
  )
}