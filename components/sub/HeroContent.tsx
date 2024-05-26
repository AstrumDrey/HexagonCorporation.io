"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-10 text-start md:max-w-[600px]">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-3xl md:text-6xl font-bold text-white"
        >
          <span>
            Ofreciendo
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              la mejor{" "}
            </span>
            experiencia de proyecto.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Ya sea desarrollando aplicaciones web o multiplataforma, nos
          esforzamos por superar las expectativas y entregar productos que
          impulsen el éxito de nuestros clientes.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-2 md:px-4 button-primary text-center text-white cursor-pointer rounded-lg"
        >
          Conócenos!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-40"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={600}
          width={600}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
