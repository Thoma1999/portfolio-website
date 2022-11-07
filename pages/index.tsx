import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import { useIntersection } from "../hooks/useIntersection"
import { useRef, useState } from "react";

const Home: NextPage = () => {



  return (
    <div className="bg-[rgb(244,151,108)] text-black h-screen snap-y snap-mandatory overflow-scroll z-0 mx-auto">
      <Head>
        <title>Thomas Laryea</title>
        <meta
          name="description"
          content="Software engineer portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center bg-[#FBE8A6]">
        <About />
      </section>
      <section id="experience" className="snap-center bg-[#B4DFE5]">
        <Experience />
      </section>
      <section id="skills" className="snap-center bg-[#303C6C]">
        <Skills/>
      </section>
    </div>
  );
};

export default Home;
