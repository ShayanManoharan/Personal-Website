import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Import icons directly from the assets folder
import Gmail from "../assets/Gmail.png";
import LinkedIn from "../assets/LinkedIn.png";
import GitHub from "../assets/GitHub.png";
import ResumePNG from "../assets/Resume.png";
import Resume from "../assets/Manoharan_Shayan_Resume.pdf";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-4'>
          <p className='text-white text-[20px] mb-6'>
            Feel free to reach out to me on email, connect on LinkedIn, view my github, or check out my resume below:
          </p>

          {/* Links Section with icons */}
          <a
            href='mailto:shayanmanoharan@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-white text-[20px] font-medium hover:text-[#915EFF] mb-4'
          >
            <img src={Gmail} alt="Email" className="w-6 h-6" />
            Email
          </a>

          <a
            href='https://www.linkedin.com/in/shayanmanoharan'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-white text-[20px] font-medium hover:text-[#915EFF] mb-4'
          >
            <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
            LinkedIn
          </a>

          <a
            href='https://github.com/ShayanManoharan'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-white text-[20px] font-medium hover:text-[#915EFF] mb-4'
          >
            <img src={GitHub} alt="GitHub" className="w-6 h-6" />
            GitHub
          </a>

          <a
            href={Resume}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-white text-[20px] font-medium hover:text-[#915EFF]'
          >
            <img src={ResumePNG} alt="Resume" className="w-6 h-6" />
            Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
