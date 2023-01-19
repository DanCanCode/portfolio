import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  source?: string;
  percent?: number;
};

export default function Skill({ directionLeft, source, percent }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full border border-neutral-400/50 shadow-md shadow-[#006aff]/50 w-16 h-16 sm:w-24 sm:h-24 xl:h-28 xl:w-28 overflow-hidden"
      >
        <img
          src={source}
          alt="Skill"
          className="p-3 object-cover text-white
        object-center filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </motion.div>

      <motion.div
        initial={{
          x: directionLeft ? -100 : 100,
        }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white/80 transition duration-300 ease-in-out 
        w-16 h-16 sm:w-24 sm:h-24 xl:h-28 xl:w-28 z-0 rounded-full"
      >
        <div className="flex items-center justify-center h-full">
          <p className="xl:text-3xl md:text-2xl text-xl font-bold text-black opacity-100">
            {percent}%
          </p>
        </div>
      </motion.div>
    </div>
  );
}
