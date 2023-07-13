import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { BsSendFill } from "react-icons/bs";

interface ChatMessage {
  userMessage: string;
  response: string;
}

function Chat() {
  const [userMessage, setUserMessage] = useState('');
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [wendyResponse, setWendyResponse] = useState<AxiosResponse<any, any> | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsThinking(true);

    try {
      const response = await axios.post('http://localhost:8000/ask-wendy', { prompt: userMessage });
      setWendyResponse(response);

      const newChatMessage: ChatMessage = {
        userMessage,
        response: response.data,
      };

      setChats([...chats, newChatMessage]);
      setUserMessage(''); // Clear the input field after submission
    } catch (error) {
      console.log(error);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="flex flex-col h-full justify-between mr-24 ml-24 border border-black">
      <div className="flex items-center justify-center">
        <h4>Wendy v1 Updated 09/06/2023</h4>
      </div>

      <div>
        <div>
          {chats.map((chat, index) => (
            <div key={index}>
              <h5>{chat.userMessage}</h5>
              <h5>{chat.response}</h5>
            </div>
          ))}
        </div>


        {isThinking ? (
          <div>
            <p className="animate-pulse">
              <i>Thinking...</i>
            </p>
          </div>
        ) : (
          ""
        )}

        <div className="flex items-center justify-center">
          <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Ask Wendy..." value={userMessage} onChange={(e) => setUserMessage(e.target.value)} />
            <button type="submit" ><BsSendFill /></button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Chat;
