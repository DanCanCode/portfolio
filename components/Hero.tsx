import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <div className="relative rounded-full overflow-hidden h-36 w-36 object-cover object-center">
        <Image
          className="object-none object-center"
          src="/daniel_portrait.jpg"
          priority
          alt="DanCanCode"
          width={200}
          height={200}
        />
      </div>

      <div className="z-10">
        <h1 className="uppercase font-bold text-white xs:text-lg text-md tracking-[4px] pb-2">
          Daniel Espinal
        </h1>
        <h2 className="xs:text-base text-sm uppercase font-semibold text-neutral-400 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h2 className="text-lg xs:text-2xl">
          I am{" "}
          <span className="text-[#006aff] font-bold">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["front-end focused.", "full-stack qualified."]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <nav className="py-2">
          <Link href="#about">
            <button className="heroLink">About</button>
          </Link>

          <Link href="#skills">
            <button className="heroLink">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroLink">Projects</button>
          </Link>

          <Link href="#contact">
            <button className="heroLink">Contact</button>
          </Link>
        </nav>
      </div>
    </div>
  );
}
