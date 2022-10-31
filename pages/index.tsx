import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(244,151,108)] text-black h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Thomas Laryea</title>
        <meta
          name="description"
          content="Software engineer portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center bg-[#FBE8A6]">
        <About />
      </section>
    </div>
  );
};

export default Home;
