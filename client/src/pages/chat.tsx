import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { BsSendFill } from "react-icons/bs";

import { ChatContext, Message } from '../context/chatsContext';


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
              <div className='flex justify-end'>
                <div className='bg-hol-purple-dark text-hol-grey-light text-sm  max-w-[85%] rounded-[32px_32px_0px_32px] mb-2 px-2 py-2'>
                  {chat.userMessage}
                </div>
              </div>
              <div className='flex justify-start'>
                <div className='bg-hol-purple-light text-sm max-w-[85%] rounded-[0px_32px_32px_32px] mb-2 px-2 py-2'>
                  {chat.wendyResponse}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full sticky bottom-0 bg-adobe-navy pt-4 pb-4">
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
            <form onSubmit={handleSubmit} className='flex w-full bg-adobe-navy border border-white rounded-lg'>
              <input type='text'  placeholder="Ask Wendy..." value={userMessage} onChange={(e) => setUserMessage(e.target.value)} className='bg-adobe-navy w-full text-sm text-white p-2 rounded-md focus:outline-none'/>
              <button type="submit" className='text-white p-2 pr-4'><BsSendFill /></button>
            </form>
          </div>


        </div>
      </div>

    </div>
  );
}

export default Chat;