import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import ChatList from "./ChatList";

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
    <>
      <div className="flex">
        <Sidebar />

        <div className="bg-lightpink w-full flex flex-col justify-between">
          <div className="pt-4">
            <div
              className="  xl:p-8 p-5   overflow   overflow-scroll
           max-h-[calc(100vh-100px)]  scrollbar-remove  relative   "
            >
              <div className="w-full h-6 absolute  top-0 left-0 bg-lightpink  "></div>
              <ChatList />
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mb-4 w-[80%] mx-auto bg-graywhite flex items-center justify-between px-8"
          >
            <input
              type="text"
              className="bg-transparent  h-14  3xl:h-16 w-full text-brown font-medium outline-none text-[18px] xl:text-[20px] 3xl:text-[28px] font-poppins"
              placeholder="Type your Message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">
              <svg
                width="47"
                height="45"
                viewBox="0 0 47 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.95992 17.4722C2.9515 17.1515 2.94184 16.6335 3.97924 16.3035L40.8522 4.57599C41.8741 4.25156 42.4595 4.79719 42.1736 5.75206L31.6373 40.9347C31.3476 41.9098 30.7583 41.943 30.3256 41.0176L23.3826 26.1084L34.9736 11.3614L19.5189 22.4217L3.95992 17.4722Z"
                  fill="#92296F"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className=" 2xl:w-[84px] lg:w-[40px]   bg-primary"></div>
      </div>
      {/* <div
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
      </div> */}
    </>
  );
};
