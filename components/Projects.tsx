import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4];
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
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full mx-auto items-center justify-evenly z-0"
    >
      <h3 className="absolute top-24 tracking-[15px] uppercase text-neutral-400 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-neutral-400/20 scrollbar-thumb-[#006aff]/80">
        <Project
          title="Simply Together Events 2.0"
          image="/simplytogether.png"
          link="https://github.com/DanCanCode/simply-together-events-2.0"
          description="Simply Together Events offers a variety of event services to enhance any upcoming celebration for you and loved ones. They offer event planning, event design, event creation, luxury picnics, and party rentals. I built this website with a mobile-first responsive design approach."
        />
        <Project
          title="Comemos (Instagram Clone)"
          image="/comemos.png"
          link="https://github.com/DanCanCode/Comemos"
          description="Comemos is a social media platform where users can share food, recipes, and connect with others. Employed MERN Stack to construct front-end components connected to back-end to access MongoDB database with Mongoose and API routes. This application has full CRUD functionality and user authentication via JSON Web Tokens and Bcrypt.
          "
        />
        <Project
          title="Honeydew Automobile E-commerce"
          image="/honeydew.png"
          link="https://github.com/DanCanCode/honeydew-automobile-ecom"
          description="Honeydew automobiles is a basic ecommerce website used to demonstrate CRUD functions. This app is built on the PERN stack and utilizes sequelize, tailwindcss, and framer motion. This project is associated with Fullstack Academy 2202 cohort"
        />
        <Project
          title="Lifestyle (Mobile Fitness App)"
          image="/lifestyle.jpeg"
          link="https://github.com/FSA-Capstone-Lifestyle/Lifestyle"
          description="Lifestyle is a mobile fitness tracking app that my team and I developed in 3 weeks at Fullstack Academy. Users of lifestyle can create new exercises/meals and add them to their personal fitness plan. Users also have the option to edit and remove items from their plan.
          "
        />
      </div>

      <div className="w-full absolute top-[30%] bg-[#006aff]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}
