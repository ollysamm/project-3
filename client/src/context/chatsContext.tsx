import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface ChatContextValue {
  chats: Chat[];
  setChats: React.Dispatch<React.SetStateAction<Chat[]>>;
  currentChat: Chat;
  setCurrentChat: React.Dispatch<React.SetStateAction<Chat>>;
  handleNewChat: Function;
  updateChat: Function;
  changeChat: Function;
  clearChat: Function;
}

export interface Message {
  userMessage: string,
  wendyResponse: string
}

interface Chat {
  chatId: Date,
  chatTopic: string,
  messages: Message[]
}
// Create the context object with undefined as the default value
export const ChatContext = createContext<ChatContextValue>({chats: [], setChats: () => {}, currentChat: {chatId: new Date(), chatTopic: '', messages:[]}, setCurrentChat: () => {}, handleNewChat: () => {}, updateChat: () => {}, changeChat: () => {}, clearChat: () => {},});

interface ChatProviderProps {
  children: ReactNode;
}

// Create the provider component
export const ChatProvider = ({ children }: ChatProviderProps) => {
  // State variables to hold the user data and playground data
  const [chats, setChats] = useState<Chat[]>([]);
  const [currentChat, setCurrentChat] = useState<Chat>({
    chatId: new Date(),
    chatTopic: '',
    messages: []
  });

  const handleNewChat = () => {
    const newChat: Chat = {
      chatId: new Date(),
      chatTopic: '',
      messages: []
    }
    setCurrentChat(newChat)
  };

  const updateChat = (message: Message) => {
    const newChat = {
      chatId: currentChat.chatId,
      chatTopic: currentChat.chatTopic || message.userMessage,
      messages: [...currentChat.messages, message]
    }
    setCurrentChat(newChat)
  }

  const changeChat = (chatId: Date) => {
    const newChat = chats.find(chat => chat.chatId === chatId)
    if (newChat == null) console.log("Error: Chat not found")
    else setCurrentChat(newChat)
  } 

  const clearChat = () => {
    // Filter out the chat with the selected chatId
    const updatedChats = chats.filter((chat) => chat.chatId !== currentChat.chatId);
    // Update the chats state with the updated list
    setChats(updatedChats);
  };

  useEffect(() => {
    let newChatList = chats.filter(chat => {
      console.log(chat.chatId, currentChat.chatId, chat.chatId !== currentChat.chatId)
      return chat.chatId !== currentChat.chatId})
    newChatList = [currentChat, ...newChatList]
    setChats(newChatList)
  }, [currentChat])

  return (
    <ChatContext.Provider value={{chats, setChats, currentChat, setCurrentChat, handleNewChat, updateChat, changeChat, clearChat,}}>
      {children}
    </ChatContext.Provider>
  );
};
