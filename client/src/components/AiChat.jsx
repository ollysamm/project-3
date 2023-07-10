import byai from "../assets/images/image-by-ai.png";

const AiChat = () => {
  return (
    <>
      <div className="my-2">
        <span className="text-white font-medium font-poppins bg-[#5703AB] text-[28px] px-4 py-2.5 rounded-[32px_32px_0px_32px] inline-block">
          At the moment, Engineering Team is at the most risk of Burnout.
        </span>
        <img className="my-3" src={byai} alt="byai" />
      </div>
    </>
  );
};

export default AiChat;
