import React from "react";
import { motion } from "framer-motion";
import { LinkIcon } from "@heroicons/react/24/solid";

type Props = {
  title?: string;
  image?: string;
  description?: string;
  link?: string;
};

export default function Project({ title, image, description, link }: Props) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center py-20 px-10  h-screen">
      <motion.img
        initial={{
          y: -200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
        className="sm:h-56 xs:h-44 h-32"
        src={image}
        alt="project"
      />

      <div className="xs:space-y-8 space-y-4 px-0 md:px-10 max-w-6xl">
        <h4 className="underline decoration-[#006aff]/50 sm:text-3xl xs:text-2xl text-lg font-semibold text-center">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title} <LinkIcon className="h-7 w-7 animate-pulse inline-block" />
          </a>
        </h4>

        <p className="sm:text-lg xs:text-base text-sm text-center">
          {description}
        </p>
      </div>
    </div>
  );
}
