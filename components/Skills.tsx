import React, { useRef, useState } from "react";
import { useIntersection } from "../hooks/useIntersection";

type Props = {};

function Skills({}: Props) {
  const ref = useRef();
  const [color, setColor] = useState(false);
  const inViewport = useIntersection(ref, "0px");

  if (inViewport) {
    console.log('inview')
  }
  
  return (
    <div ref={ref} className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[10px] text-white text-3xl">
        Skills
      </h3>
    </div>
  );
}

export default Skills;
