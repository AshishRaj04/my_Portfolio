import React from "react";
import { services } from "../constants";

const ServiceCard = ({ title, icon }) => (
  <div className="w-full md:w-72 lg:w-96 flex flex-col p-6 h-full bg-tertiary rounded-[20px] justify-evenly items-center bg-[#333]">
    <img
      src={icon}
      alt="web-development"
      className="w-16 h-16 object-contain"
    />

    <h3 className="text-white text-base font-normal text-center">{title}</h3>
  </div>
);

const About = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          About me.
        </h2>

        <div className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center">
          I'm a software developer with experience in Python and JavaScript. I
          create machine learning projects and integrate it to website for uses.
          Let's work together to bring your ideas to life!
        </div>
      </div>

      <div className="w-full mt-20 px-16 flex flex-row flex-wrap gap-5 leading-6 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
