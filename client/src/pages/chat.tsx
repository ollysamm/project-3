import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { BsSendFill } from "react-icons/bs";

import { ChatContext, Message } from '../context/chatsContext';

import { UserAvatar } from '../components/loggedInUser';

import logoImage from "../assets/img/wendy.png";


function Chat() {
  const [userMessage, setUserMessage] = useState('');
  const [wendyResponse, setWendyResponse] = useState<string | null>(null);
  const [lastResponseTime, setLastResponseTime] = useState<Date>(new Date())
  const [isThinking, setIsThinking] = useState(false);
  //const [chats, setChats] = useState<ChatMessage[]>([]);
  //const [chatTopic, setChatTopic] = useState('');
  const { currentChat, updateChat} = useContext(ChatContext)
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userMessage) return;
    setIsThinking(true);

    try {
      const response = await axios.post('http://localhost:8000/ask-wendy', { prompt: userMessage });
      setWendyResponse(response.data);
      setLastResponseTime(new Date())
    } catch (error) {
      console.log(error);
    } finally {
      setIsThinking(false);
    }
  };

  useEffect(() => {
    const newChatMessage: Message = {
      userMessage,
      wendyResponse: wendyResponse || '',
    };
    console.log("Got response")
    if (userMessage && wendyResponse) {
      updateChat(newChatMessage)
      setUserMessage('')
    } 
  }, [lastResponseTime])

  return (
    <div className="flex flex-col justify-between h-full overflow-auto pl-4 xl:pl-24 pr-4 xl:pr-24">
       <div></div> {/* empty div to keep justify-between style */}

      <div>
        <div>
          {currentChat.messages?.map((chat, index) => (
            <div key={index}>
              <div className='flex justify-end items-center'>
                <div className="prompt-bubble">
                  <div className='prompttext'><p>{chat.userMessage}</p></ div>
                  </div>
                  <UserAvatar />
              </div>
              <div className='flex justify-start items-center'>
                <img src={logoImage} alt="Logo" className="avatar" />
              <div className="response-bubble">
                  <div className='responsetext'><p>{chat.wendyResponse}</p></ div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full sticky bottom-0 bg-transparent pt-4 pb-4">
          {isThinking ? (
            <div className='mb-2'>
              <p className="animate-pulse">
                <i>Thinking...</i>
              </p>
            </div>
          ) : (
            ""
          )}

          <div className="flex items-center justify-center mb-2">
            <form onSubmit={handleSubmit} className='submit flex w-full bg-adobe-navy border'>
              <input type='text'  placeholder="Ask Wendy..." value={userMessage} onChange={(e) => setUserMessage(e.target.value)} className='bg-adobe-navy w-full text-sm text-white  focus:outline-none '/>
              <button type="submit" className='submit text-white p-2 pr-4'><BsSendFill /></button>
            </form>
          </div>


        </div>
      </div>

    </div>
  );
}

export default Chat;