import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const supporters = [
  {
    name: "ACM Vinica",
    logo: `${process.env.PUBLIC_URL}/materials/logo-acm-vinica-png-1024x637.png`,
    url: "https://www.mladezba.sk/",
  },
  { 
    
    name: "Dom Quo Vadis",
    logo: `${process.env.PUBLIC_URL}/materials/QVlogoXLmod2.png`,
    url: "https://domquovadis.sk",

   },
  {
    name: "Gabriel Oravec"
  },
  { name: "Samuel Čutka" },
];

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="px-4 md:px-0">
      {/* Outer container – same as CampaignBanner */}
      <div
        ref={ref}
        className="
          relative overflow-hidden
          rounded-2xl
          py-20
          mt-10
          mx-4 md:mx-8 lg:mx-12
          bg-[#FCF5DC]
          shadow-md]
        "
      >
        <div className="px-6 mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="font-display text-xs font-semibold tracking-[0.25em] uppercase text-[#caa45b]">
              Spolupráca
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#2b1d14] md:text-3xl">
              Naši partneri
            </h2>
          </motion.div>

          {/* Supporters */}
          <div className="grid grid-cols-1 gap-12 scale-95 sm:grid-cols-2 md:grid-cols-4">
            {supporters.map((s, index) => {
              const Content = s.logo ? (
                <img
                  src={s.logo}
                  alt={s.name}
                  className="
                    max-h-24
                    max-w-[220px]
                    object-contain
                    transition-transform duration-300
                    hover:scale-105
                  "
                  loading="lazy"
                />
              ) : (
                <span
                  className="
                    text-center
                    font-display
                    text-xl md:text-2xl
                    font-semibold
                    text-[#2b1d14]
                    transition-colors
                    hover:text-[#caa45b]
                  "
                >
                  {s.name}
                </span>
              );

              return (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="flex items-center justify-center"
                >
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#caa45b] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FCF5DC]"
                      aria-label={`Open ${s.name}`}
                    >
                      {Content}
                    </a>
                  ) : (
                    Content
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
