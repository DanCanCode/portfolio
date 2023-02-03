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
          description="Transform your events into unforgettable experiences with Simply Together Events. Our user-friendly platform is designed to make event planning a breeze, with interactive tools and a wide range of services. From event planning and design to luxury picnics and party rentals, we have everything you need to make your celebration truly special. With a mobile-first approach, enjoy a seamless experience on any device for a hassle-free event planning process. Let's make your next celebration simply unforgettable."
        />
        <Project
          title="Comemos (Instagram Clone)"
          image="/comemos.png"
          link="https://github.com/DanCanCode/Comemos"
          description="Comemos is a social media platform that enables users to share mouth-watering recipes, connecting with like-minded foodies, and discovering new dishes. Built using the MERN Stack, the platform features a seamless connection between its front-end components and back-end, powered by React and MongoDB. With full CRUD functionality and user authentication, Comemos delivers a comprehensive and secure experience for food enthusiasts."
        />
        <Project
          title="Honeydew Automobile E-commerce"
          image="/honeydew.png"
          link="https://github.com/DanCanCode/honeydew-automobile-ecom"
          description="Rev your engines with Honeydew Automobiles - the ultimate online marketplace for your automotive needs. Shop a vast selection of vehicles with ease, all from the comfort of your own home. Developed with cutting-edge PERN stack technology, this e-commerce website boasts effortless user experience, from profile management to cart customization and order tracking. Elevate your browsing journey with fluid animations powered by Framer Motion. Proudly built by a skilled team of 4 engineers at Fullstack Academy."
        />
        <Project
          title="Lifestyle (Mobile Fitness App)"
          image="/lifestyle.jpeg"
          link="https://github.com/FSA-Capstone-Lifestyle/Lifestyle"
          description="Elevate your health and fitness game with Lifestyle - the mobile app that simplifies the journey to wellness. Say goodbye to the hassle of piecing together workouts and meal plans. With Lifestyle, you can craft customized routines and track your progress with ease. Built using React Native, Expo, and PostgreSQL, this app is the result of a collaborative effort between myself and three skilled engineers at Fullstack Academy."
        />
      </div>

      <div className="w-full absolute top-[30%] bg-[#006aff]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}
