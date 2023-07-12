import { FiPlus } from "react-icons/fi";

export function NewChat() {
  return (
    <button className="flex items-center border border-hol-grey-light rounded-md text-lg px-3 py-2 w-full mb-4">
      <FiPlus />
      <span className="ml-3">New Chat</span>
    </button>
  )
}