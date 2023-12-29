import { motion } from "framer-motion";
import { reactjs } from "../assets";
import Model from "./Model";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="sm:px-16 px-6 absolute inset-0 top-10 max-w-7xl mx-auto flex flex-col justify-start items-center gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div>
            <h1 className="font-black text-textColor lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
              Hi , I'm
            </h1>
            <div className="flex gap-5">
              <div className="hidden sm:flex w-[9rem]">
                <span className="inline-block  text-[3rem] font-semibold  lg:text-[4rem] lg:font-bold text-textHover">
                  {"{"}
                </span>
                <img
                  src={reactjs}
                  alt="reactLogo"
                  className="w-[140px] animate-spin-slow "
                />
                <span className="inline-block   text-[3rem] font-semibold  lg:text-[4rem] lg:font-bold text-textHover">
                  {"}"}
                </span>
              </div>
              <h1 className="sm:ml-4 inline-block font-black  lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] bg-gradient-to-r from-purple-600 via-blue-400 to-blue-600 text-transparent bg-clip-text ">
                Ashish Raj
              </h1>
            </div>

            <p className="font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-textColor">
              I am a React Frontend Developer and UI designer .
            </p>
          </div>
        </div>
      </div>
      <Model/>
      <div className="absolute xs:bottom-[60px] bottom-[30px] w-full flex justify-center items-center z-50">
        <a href="#about">
          <div className="w-[35px] h-[65px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 z-50">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full mb-1 bg-textColor z-50"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
