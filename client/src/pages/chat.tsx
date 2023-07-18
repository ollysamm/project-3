import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { BsSendFill } from "react-icons/bs";

import { FiPlus } from "react-icons/fi";

interface ChatMessage {
  userMessage: string;
  wendyResponse: string;
  chatTopic: string;
}

function Chat() {
  const [userMessage, setUserMessage] = useState('');
  const [wendyResponse, setWendyResponse] = useState<string | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [chatTopic, setChatTopic] = useState('');
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsThinking(true);

    try {
      const response = await axios.post('http://localhost:8000/ask-wendy', { prompt: userMessage });
      setWendyResponse(response.data);

    } catch (error) {
      console.log(error);
    } finally {
      setIsThinking(false);
      //setUserMessage(''); // Clear the input field after submission
    }
  };

  useEffect(() => {
    const newChatMessage: ChatMessage = {
      userMessage,
      wendyResponse: wendyResponse || '',
      chatTopic,
    };
    if (!chatTopic && userMessage && wendyResponse) {
      setChatTopic(userMessage)
    }
    if (chatTopic && userMessage && wendyResponse) {
      setChats(chats => (
        [...chats, newChatMessage]
      ))
    } 
  }, [wendyResponse, chatTopic])

  console.log(wendyResponse, chatTopic)



  return (
    <div className="flex flex-col justify-between h-full overflow-auto pl-4 xl:pl-24 pr-4 xl:pr-24">
       <div></div> {/* empty div to keep justify-between style */}

      <div>
        <div>
          {chats.map((chat, index) => (
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

        <div className="w-full sticky bottom-0 bg-hol-grey-light pt-4 pb-4">
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
            <form onSubmit={handleSubmit} className='flex w-full bg-hol-grey border border-hol-purple-dark rounded-md'>
              <input type='text' placeholder="Ask Wendy..." value={userMessage} onChange={(e) => setUserMessage(e.target.value)} className='bg-hol-grey w-full text-sm text-hol-grey-light p-2 rounded-md focus:outline-none'/>
              <button type="submit" className='text-hol-grey-light p-2 pr-4'><BsSendFill /></button>
            </form>
          </div>

          <div className="flex items-center justify-center">
            <h4 className='text-sm font-bold'>Wendy v1 - Updated 09/06/2023</h4>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Chat;