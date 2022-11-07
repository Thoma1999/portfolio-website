import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {

};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
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
          duration: 1.5,
        }}
        className="flex flex-row items-center "
      >
        <SocialIcon
          style={{ height: 30, width: 30 }}
          className="cursor-pointer mr-3"
          url="https://www.linkedin.com/in/thomas-laryea-6804b8108"
          bgColor= "black"
        />
        <SocialIcon
          style={{ height: 30, width: 30 }}
          className="cursor-pointer mr-3"
          url="https://github.com/Thoma1999"
          bgColor="black"
        />
        <SocialIcon
          style={{ height: 30, width: 30 }}
          className="cursor-pointer"
          url="https://twitter.com/TomLaryea"
          bgColor="black"
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
          duration: 1.5,
        }}
        className="flex flex-row items-center text-black-300 cursor-pointer"
      >
        <SocialIcon
          style={{ height: 40, width: 40 }}
          network="email"
          bgColor="transparent"
          fgColor="black"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-black-400">
          CONTACT
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
