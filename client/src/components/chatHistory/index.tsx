import React, { useContext, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";

import { ChatContext } from "../../context/chatsContext";

export function ChatHistory() {
  const [active, setActive] = useState(false);
  const {chats, handleNewChat, changeChat} = useContext(ChatContext)
 
  const createNewChat = () => {
    handleNewChat()
  }

  const handleTopicChange = (chatId: Date) => {
    changeChat(chatId)
    setActive(!active);
  }


  return (
    <div>
    <button className="flex items-center border border-hol-grey-light rounded-md text-lg px-3 py-2 w-full mb-4" onClick={createNewChat}>
      <FiPlus />
      <span className="ml-3">New Chat</span>
    </button>

      <div className="mb-2">History</div>
      <div className="mb-4">
        <ul>
          {chats?.map((chat, index) => (<li key={index}><button className={`flex items-center rounded-md w-full p-2 mb-2 ${
                active ? "bg-hol-purple-light" : ""
              }`} onClick={() => handleTopicChange(chat.chatId)}>
                <BsChatLeft size={20} />
                <span className="ml-2 truncate">
                {chat.chatTopic}</span></button></li>))}
        </ul>
      </div>

      <button className="flex items-center">
        <div className="flex items-center hover:text-hol-red-pale">
          <RiDeleteBinLine  />
          <span className="ml-2 text-sm">Clear Chat</span>
        </div>
      </button>

    </div>
  );
}

