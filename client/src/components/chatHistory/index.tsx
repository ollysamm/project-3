import { BsChatLeft} from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";


export function ChatHistory() {
  return (
    <div>
      <div className="mb-2">
        History
      </div>
      <div className="mb-4">
        <ul>
          <li className="flex items-center mb-2">
            <BsChatLeft size={20} />
            <span className="ml-2 truncate">Department at most risk of burnout</span>
          </li>
          <li className="flex items-center mb-2">
            <BsChatLeft size={20} />
            <span className="ml-2 truncate">Level of Understanding of job roles</span>
          </li>
          <li className="flex items-center mb-2">
            <BsChatLeft size={20} />
            <span className="ml-2 truncate">Risk of Absenteeism in Edmonton office</span>
          </li>
        </ul>
      </div>

      <button className="flex items-center">
        <RiDeleteBinLine />
        <span className="ml-2 text-sm">Clear Chat</span>
      </button>
    </div>
  )
}

