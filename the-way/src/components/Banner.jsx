import React from "react";
import { motion } from "framer-motion";

export default function Banner({ 
  title = "Cesta začína jednou kartou.", 
  buttonText = "Naše produkty",
  backgroundImage = `${process.env.PUBLIC_URL}/materials/pozadie.png`,
  onButtonClick
}) {
  return (
    <section
      className="relative w-full h-[50vh] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background image */}
      <img
        src={backgroundImage}
        alt="Banner background"
        className="absolute inset-0 object-cover w-full h-full brightness-75"
      />

      {/* Overlay gradient (optional aesthetic effect) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-6 text-3xl font-extrabold leading-tight md:text-5xl">
          {title}
        </h1>

        {/* <button
          onClick={onButtonClick}
          className="px-8 py-3 font-semibold text-white transition-all bg-orange-500 rounded-full shadow-lg hover:bg-orange-600"
        >
          {buttonText}
        </button> */}
      </motion.div>
    </section>
  );
}
