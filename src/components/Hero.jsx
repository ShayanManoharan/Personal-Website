import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#915EFF]'>Hi, I'm Shayan Manoharan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer developing production-grade applications for millions of users,
            focusing on iOS, full-stack solutions, and backend integrations.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* 3D Interaction Indicator - Desktop */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className='absolute right-[10%] top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center gap-2 z-10'
      >
        <motion.div
          animate={{
            x: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className='flex items-center gap-2'
        >
          <svg
            width='28'
            height='28'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='text-[#915EFF]'
          >
            <path
              d='M19 12H5M5 12L12 5M5 12L12 19'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='text-white text-base font-medium whitespace-nowrap'>
            Spin me!
          </span>
        </motion.div>
        <div className='w-0.5 h-16 bg-gradient-to-b from-[#915EFF] to-transparent opacity-50' />
      </motion.div>

      {/* 3D Interaction Indicator - Mobile */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className='absolute top-[200px] right-4 md:hidden flex items-center gap-2 z-10'
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className='flex items-center gap-1 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#915EFF]/30'
        >
          <svg
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='text-[#915EFF]'
          >
            <path
              d='M19 12H5M5 12L12 5M5 12L12 19'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='text-white text-sm font-medium'>
            Drag to rotate
          </span>
        </motion.div>
      </motion.div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;