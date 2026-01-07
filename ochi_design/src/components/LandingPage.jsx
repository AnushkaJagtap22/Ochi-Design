import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className="w-full h-screen bg-zinc-900 pt-1">

      <div className="textStructure mt-40 px-20">
        {["We create", "eye opening", "presentations"].map((line, index) => (
          <div className="masker">
            <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ease : [0.76,0,0.24,1],duration: 0.8}} 
                  className="w-[7vw] h-[5vw] bg-red-500"></motion.div>)}
            <h1 className="uppercase text-7xl leading-[6vw] tracking-tighter font-semibold font-['Founders_Grotesk_Condensed'] text-white">
              {line}
            </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-zinc-800 mt-24 px-20 py-5 flex justify-between items-center ">
        {["For public and private companies", "From the first pitch to IPO"].map(
          (item, index) => (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none text-zinc-300"
            >
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-5">
        <button
            className="px-6 py-3 border border-zinc-700 rounded-full text-sm font-medium text-white 
             hover:bg-white hover:text-black transition-all duration-300  uppercase">
            Start the project
        </button>
        <span className="w-10 rotate-45 h-10 flex items-center justify-center rounded-full border border-zinc-700"><FaArrowUpLong /></span>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
