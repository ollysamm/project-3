import React, { useState } from "react";
import axios from "axios";

interface ResponseData {
  output: string;
}

export const Chat = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await axios.post<ResponseData>("http://localhost:5600", {
        query: inputValue,
      });
      setResponse(data.output);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ padding: "20px" }}
    >
      <header>
        <h1>wendyai</h1>
      </header>

      <section>
        <div>
          <p>Text</p>
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
