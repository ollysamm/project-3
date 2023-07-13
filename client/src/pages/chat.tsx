import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Icon } from '@iconify/react';

interface ChatMessage {
  userMessage: string;
  response: string;
}

function Chat() {
  const [userMessage, setUserMessage] = useState('');
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [response, setResponse] = useState<AxiosResponse<any, any> | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/ask-wendy', { prompt: userMessage });
      setResponse(response);

      const newChatMessage: ChatMessage = {
        userMessage,
        response: response.data,
      };

      setChats([...chats, newChatMessage]);
      setUserMessage(''); // Clear the input field after submission
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col h-full justify-between m-4 border border-black">
      <div>
        <h4>Wendy v1 Updated 09/06/2023</h4>
      </div>

      <div>
        <div>
          {chats.map((chat, index) => (
            <div key={index}>
              <h5>{chat.response}</h5>
              <h5>{chat.userMessage}</h5>
            </div>
          ))}
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ask Wendy..." value={userMessage} onChange={(e) => setUserMessage(e.target.value)} />
            <button type="submit"><Icon icon="majesticons:send" /></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
