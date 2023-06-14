import React, { useState } from 'react';
import axios from 'axios';

export const Chat = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('http://127.0.0.1:8000', { query: inputValue });
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col'>
      <header>wendyai</header>
      
      <section>
        <div>
          <h2>Wendy v1 Updated 09/06/2023</h2>
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
        <h3>{response}</h3>
      </div>
    </div>
  );
};
