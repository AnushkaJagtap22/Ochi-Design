import React, { useState } from "react";
import { motion } from "framer-motion";

const Featured = () => {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  const ease = [0.76, 0, 0.24, 1];

  return (
    <div className="w-full py-20">

      <div className="w-full px-20 border-b border-zinc-800 pb-20">
        <h1 className="text-6xl uppercase tracking-tighter font-['Neue_Montreal']">
          Featured Projects
        </h1>
      </div>

      <div className="px-20">
        <div className="flex gap-10 mt-20">

          {/* LEFT CARD */}
          <div
            onMouseEnter={() => setHoverLeft(true)}
            onMouseLeave={() => setHoverLeft(false)}
            className="relative w-1/2 h-[75vh] overflow-hidden rounded-xl"
          >
            <h1
              className="absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              z-30 flex overflow-hidden
              text-[8vw] font-['Founders_Grotesk_Condensed']
              tracking-tighter leading-none text-lime-300 pointer-events-none"
            >
              {"MATT HORN".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={hoverLeft ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease, delay: i * 0.08 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            <motion.img
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease }}
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt="MATT HORN"
            />
          </div>

          {/* RIGHT CARD */}
          <div
            onMouseEnter={() => setHoverRight(true)}
            onMouseLeave={() => setHoverRight(false)}
            className="relative w-1/2 h-[75vh] overflow-hidden rounded-xl"
          >
            <h1
              className="absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              z-30 flex overflow-hidden
              text-[8vw] font-['Founders_Grotesk_Condensed']
              tracking-tighter leading-none text-lime-300 pointer-events-none"
            >
              {"VISE".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={hoverRight ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease, delay: i * 0.1 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            <motion.img
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease }}
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png"
              alt="VISE"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Featured;
