import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";

const ServiceCard = ({index , title , icon}) => {
  return (
    <>
      <p>{title}</p>
    </>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className="font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-primary">
          Introduction
        </p>
        <h2 className="font-black text-primary lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
          Overview
        </h2>
      </motion.div>

      <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
        eligendi voluptatem suscipit veritatis repellendus non illum iusto ipsam
        nisi magnam ad ea, odit excepturi ex? Voluptatum quidem nulla
        consectetur voluptatem! Voluptatibus eligendi iure neque blanditiis
        totam, ipsam, consequuntur cum delectus ex, exercitationem enim corrupti
        consectetur expedita distinctio aliquam et omnis ut assumenda odio
        inventore fugiat!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {
          services.map((service , index) => {
            return <ServiceCard key={service.title} index={index} {...service}  />
          })
        }
      </div>
    </>
  );
};

export default About;
