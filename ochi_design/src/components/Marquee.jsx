import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full py-10 bg-[#004D43] rounded-tl-2xl rounded-tr-2xl overflow-hidden">
      <div className="border-t-2 border-b-2 border-zinc-300 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-20"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
        >
          {/* Set 1 */}
          <h1 className="text-[15vw] leading-none font-founders font-semibold pt-10">
            WE ARE OCHI
          </h1>
          <h1 className="text-[15vw] leading-none font-founders font-semibold pt-10">
            WE ARE OCHI
          </h1>

          {/* Set 2 */}
          <h1 className="text-[15vw] leading-none font-founders font-semibold pt-10">
            WE ARE OCHI
          </h1>
          <h1 className="text-[15vw] leading-none font-founders font-semibold pt-10">
            WE ARE OCHI
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
