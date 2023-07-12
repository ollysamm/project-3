
import { BiUserCircle } from "react-icons/bi";

export function LoggedInUser() {
  return (
    <div className="flex items-center mb-6">
      <BiUserCircle size={40} />
      <div className="ml-2">
        <div>TestUser</div>
        <div>Company_B</div>
      </div>
    </div>
  )
}
