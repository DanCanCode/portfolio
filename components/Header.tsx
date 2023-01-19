import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 px-5 py-2 flex items-start justify-between mx-auto max-w-7xl z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.0,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/dancancode/"
          bgColor="transparent"
          fgColor="rgba(255, 255, 255, 0.8)"
        />

        <SocialIcon
          url="https://github.com/DanCanCode"
          bgColor="transparent"
          fgColor="rgba(255, 255, 255, 0.8)"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.0,
        }}
        className="flex flex-row items-center text-white/80"
      >
        <SocialIcon
          url="mailto:dancancode@protonmail.com"
          bgColor="transparent"
          fgColor="rgba(255, 255, 255, 0.8)"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm">
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
