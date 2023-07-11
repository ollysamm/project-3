import React, { useState } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';


export function ChatPage() {
  const [inputValue, setInputValue] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('http://localhost:8000/ask-wendy', { prompt: inputValue });
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=''>
      
      <section>
        <div>
          <h4>Wendy v1 Updated 09/06/2023</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ask Wendy..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Submit <Icon icon="majesticons:send" /></button>
          </form>
        </div>
      </section>

      <div>
        <h5>{response}</h5>
      </div>

    </div>
  );
};
