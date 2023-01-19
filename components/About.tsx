import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
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
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl mx-auto items-center justify-center sm:justify-evenly md:justify-center"
    >
      <h3 className="absolute top-24 tracking-[15px] uppercase text-neutral-400 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        whileInView={{
          x: 0,
        }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 sm:-mb-28 md:mb-0 md:ml-10 relative flex-shrink-0 rounded-full md:rounded-lg overflow-hidden h-44 w-44 sm:h-56 sm:w-56 md:w-80 md:h-96 object-cover object-center"
        src="/daniel_book.jpg"
        alt="DanCanCode"
      />

      <div className="space-y-4 lg:space-y-6 px-10">
        <h4 className="xl:text-4xl sm:text-3xl xs:text-2xl text-lg font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#006aff]/50">little</span>{" "}
          background.
        </h4>
        <p className="pr-3 sm:text-base text-sm max-w-2xl max-h-72 overflow-y-scroll scrollbar-thin scrollbar-track-neutral-400/20 scrollbar-thumb-[#006aff]/80">
          My name is Daniel , and I am a self-driven Frontend Engineer located
          in New York. Since I was a kid, I loved building computers and working
          on small projects for my friends. Since then, I have had the pleasure
          of working with multiple software engineers to develop and deploy
          modern web applications using the latest ES6 features and JavaScript
          frameworks. As I continue to expand my knowledge as a developer, I
          seek to create software that will have a lasting impact on the world.
          I am eager to work in an agile environment with a team of developers
          who prioritize communication, mentorship, and critical thinking. Feel
          free to connect and chat!
        </p>
      </div>
    </motion.div>
  );
}
