import avataricon from "../assets/images/avatar-icon.png";
import { ChatIcon, PlusIcon, Settings, Support } from "./Icons";

const Sidebar = () => {
  return (
    <>
      <aside className="bg-primary w-full xl:max-w-[420px] lg:max-w-[360px] max-w-[280px] 3xl:max-w-[545px] h-screen p-5 3xl:p-8 ">
        <div className="relative h-full">
          <div className="flex items-center justify-between mb-5">
            <h1 className="text-white text-[38px] 3xl:text-[48px] font-sofiapro  cursor-pointer">
              wendy
              <span className="text-[28px] 3xl:text-[36px] text-secondary">
                ai
              </span>{" "}
            </h1>

            <img src={avataricon} alt="avatar" className="cursor-pointer " />
          </div>

          <button className="flex items-center border border-lightblue font-roboto  text-[18px] xl:text-[20px] 3xl:text-[28px] px-3 py-2 text-white w-full transition-all ease-linear duration-200  hover:border-white">
            <PlusIcon />
            <span className="ml-3">Chat History</span>
          </button>

          <ul className="my-8 overflow-auto max-h-[calc(100vh-300px)] 2xl:max-w-[80%]">
            <li className="flex items-center font-roboto text-white text-[18px] xl:text-[20px] 3xl:text-[28px] mb-3 ">
              <span className="min-w-[42px] mt-1">
                {" "}
                <ChatIcon />
              </span>
              <p className="ml-3 cursor-pointer">
                <span>Departments at risk of burnout - </span>
                <span className="text-gray">now</span>
              </p>
            </li>{" "}
            <li className="flex items-center font-roboto text-white text-[18px] xl:text-[20px] 3xl:text-[28px] mb-3 mt-2 ">
              <span className="min-w-[42px] mt-1">
                {" "}
                <ChatIcon />
              </span>
              <p className="ml-3 cursor-pointer">
                <span>Teams active outside work hours - </span>
                <span className="text-gray">2 weeks ago </span>
              </p>
            </li>
          </ul>

          <div className="flex flex-wrap items-center justify-between text-[21px] font-poppins font-medium text-whitelight absolute bottom-0 w-full max-w-[420px] 3xl:max-w-[629px]">
            <h4 className="flex items-center mt-2 text-[18px] xl:text-[20px] 3xl:text-[25px]">
              {" "}
              <span className="cursor-pointer">
                {" "}
                <Support />
              </span>
              <span className="ml-2 cursor-pointer ">Support & FAQ</span>
            </h4>
            <h4 className="flex items-center mt-2 text-[18px] xl:text-[20px] 3xl:text-[25px]">
              {" "}
              <span className="cursor-pointer">
                {" "}
                <Settings />
              </span>
              <span className="ml-2 cursor-pointer">Settings</span>
            </h4>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
