import React from "react";
import { services } from "../constants";
import { technologies } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="dark:text-textColor text-textColorWhite flex flex-col justify-center items-center mt-5">
      <div className="border-b-2 border-indigo-500 w-1/2"></div>
      <div className="">
        <motion.div>
          <h1 className="text-4xl font-bold mt-8">About Me</h1>
          <p>
            Hi there ! this is Ashish Raj . I enjoy wasting my time while typing
            java-script on vs-code and looking at my laptop screen all the time
            . I'm not alone doing this , my HRX cap and hoody are with me all
            the time .
          </p>
        </motion.div>
      </div>

      <div>
        <h2>Services that I provide :</h2>
        <ul>
          {services.map((items, index) => (
            <li key={index} className="bg-card">
              <img src={items.icon}></img>
              <p>{items.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Technologies that I use :</h2>
        <ul>
          {technologies.map((items, index) => (
            <li key={index} className="bg-card">
              <img src={items.icon}></img>
              <p>{items.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
