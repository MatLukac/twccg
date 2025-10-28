import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

export default function AboutBanner({ 
  title = "Cesta začína jednou kartou.", 
  buttonText = "Podpor nás na Donio",
  backgroundImage = `${process.env.PUBLIC_URL}/materials/IMG_5471.jpg`,
  onButtonClick
}) {
  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center text-[#D7B264] overflow-hidden">
      {/* Background image */}
      <img
        src={backgroundImage}
        alt="Banner background"
        className="absolute inset-0 object-cover w-full h-full brightness-75"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/30" />

      <motion.div
        className="relative z-10 max-w-3xl px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-6 text-3xl font-extrabold drop-shadow-[2px_2px_0_#411F0F] leading-tight md:text-5xl">
          {title}
        </h1>

        
      </motion.div>
    </section>
  );
}
