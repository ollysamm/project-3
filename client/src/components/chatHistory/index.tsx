import React, { useContext, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";

import { ChatContext } from "../../context/chatsContext";

export function ChatHistory() {
  const [activeChatId, setActiveChatId] = useState<Date | null>(null); // Store the ID of the active chat
  const { chats, handleNewChat, changeChat, clearChat } = useContext(ChatContext);

  const createNewChat = () => {
    handleNewChat();
  };

  const handleTopicChange = (chatId: Date) => {
    changeChat(chatId);
    setActiveChatId(chatId); // Set the active chat ID when a chat item is clicked
  };

  const deleteChat = () => {
    clearChat();
  };

  return (
    <div>
      <button
        className="flex items-center border border-hol-grey-light rounded-md text-lg px-3 py-2 w-full mb-4 hover:bg-adobe-navy"
        onClick={createNewChat}
      >
        <FiPlus />
        <span className="ml-3"><h1>New Chat</h1></span>
      </button>

      <div className="mb-2"><h1>History</h1></div>
      <div className="mb-4">
        <ul>
          {chats?.map((chat, index) => (
            <li key={index}>
              <button
                className={`flex items-center rounded-md w-full p-2 mb-4 ${
                  activeChatId === chat.chatId ? "bg-hol-purple-light" : ""
                }`}
                onClick={() => handleTopicChange(chat.chatId)}
              >
                <BsChatLeft size={20} />
                <span className="ml-2 truncate"><h2>{chat.chatTopic || "..."}</h2></span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button className="flex items-center" onClick={deleteChat}>
        <div className="flex items-center hover:text-hol-red-pale">
          <RiDeleteBinLine />
          <span className="ml-2"><h1>Clear Chats</h1></span>
        </div>
      </button>
    </div>
  );
}
