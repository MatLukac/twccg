import React from "react";
import { motion } from "framer-motion";
import CountdownBanner from "./CountdownBanner";

export default function Banner({ 
  title = "Hra, kde svätosť víťazí!.",
  backgroundImage = `${process.env.PUBLIC_URL}/materials/5U6A6906.JPG`,
}) {
  return (
    <section
      className="relative w-full flex items-center justify-center text-[#D7B264] overflow-hidden " 
      style={{
        minHeight: "50vh", // bežná výška
        padding: "clamp(3rem, 8vh, 6rem) 1vw", // dýchanie zhora aj zdola
      }}
    >
      {/* Pozadie */}
      <img
        src={backgroundImage}
        alt="Banner background"
        className="absolute inset-0 object-cover w-full h-full brightness-75"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40" />

      {/* Obsah */}
      <motion.div
        className="relative z-10 w-full max-w-[90vw] md:max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="font-extrabold drop-shadow-[2px_2px_0_#411F0F]"
          style={{
            fontSize: "clamp(3rem, 4.5vw, 4rem)",
            lineHeight: 1.2,
            marginBottom: "clamp(3rem, 4vh, 3rem)",
          }}
        >
          {title}
        </h1>

        <CountdownBanner />
      </motion.div>
    </section>
  );
}
