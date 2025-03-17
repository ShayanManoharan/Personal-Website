import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-col items-center'>
      {/* Big Title */}
      <h2 className='text-6xl font-bold text-white mb-10'>Skills</h2>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className='w-28 h-28 relative group flex flex-col items-center' // Flex column layout
          >
            {/* Technology Name */}
            <div className='text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2'>
              <p className='text-center'>{technology.name}</p>
            </div>

            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
