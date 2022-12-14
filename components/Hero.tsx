import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundSquares from "../components/BackgroundSquares";
import profilePic from "../public/profilepic.svg";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Software Engineeer", "Tech enthusiast", "Skateboarder"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div
    initial={{
      opacity: 0,
      scale: 0.5,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 1.5,
    }}
     className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundSquares />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={profilePic}
        alt="user profile picture"
      />
      <div>
        <h2 className="text-3xl uppercase text-black font-light pb-2">
          Thomas Laryea
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="">{text}</span>
          <Cursor cursorColor="#000000" />
        </h1>
        <div>
          <Link href="/about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="/experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="/skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="/projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
