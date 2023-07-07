import React, { useState } from 'react';
import axios from 'axios';


export function ChatPage() {
  const [inputValue, setInputValue] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('http://localhost:8000', { query: inputValue });
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-hol-blue'>
      
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
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <div>
        <h5>{response}</h5>
      </div>

    </div>
  );
};
