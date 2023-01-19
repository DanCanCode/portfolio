import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.0 }}
      viewport={{ once: true }}
      className="h-screen overflow-hidden flex flex-col relative text-center md:text-left md:flex-row max-w-7xl mx-auto items-center justify-evenly"
    >
      <h3 className="absolute top-24 tracking-[15px] uppercase text-neutral-400 text-2xl">
        Skills
      </h3>

      <div className="grid xs:grid-cols-4 grid-cols-3 sm:gap-5 gap-4">
        <Skill
          percent={90}
          source={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          }
        />
        <Skill
          percent={80}
          source={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          }
        />
        <Skill
          percent={80}
          source={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          }
        />
        <Skill
          percent={80}
          source={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          }
        />
        <Skill
          percent={70}
          source={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          }
        />
        <Skill
          percent={80}
          source={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          }
        />
        <Skill
          percent={80}
          source={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          }
        />
        <Skill
          percent={60}
          source={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          }
        />
        <Skill
          directionLeft={true}
          percent={70}
          source={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          }
        />
        <Skill
          directionLeft={true}
          percent={70}
          source={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
          }
        />
        <Skill
          directionLeft={true}
          percent={80}
          source={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          }
        />
        <Skill
          directionLeft={true}
          percent={90}
          source={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          }
        />
        <Skill
          directionLeft={true}
          percent={90}
          source={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          }
        />
        <Skill
          directionLeft={true}
          percent={80}
          source={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
          }
        />
        <Skill
          directionLeft={true}
          percent={70}
          source={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
          }
        />
        <Skill
          directionLeft={true}
          percent={80}
          source={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
          }
        />
      </div>
    </motion.div>
  );
}
