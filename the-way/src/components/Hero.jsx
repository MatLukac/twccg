import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ShoppingCart,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const heroBg = `${process.env.PUBLIC_URL}/materials/5U6A6906.JPG`;

const heroSlides = [
  {
    id: 1,
    backgroundImage: heroBg,
    title: "The Way of the",
    titleAccent: "Disciple",
    tagline: "Hra, kde svätosť víťazí!",
    description: "Objavte jedinečnú kartovú hru, kde svätci sú vaši hrdinovia.",
    primaryCta: {
      label: "Kúpiť hru",
      icon: <ShoppingCart className="w-5 h-5 mr-2" />,
    },
    secondaryCta: {
      label: "Ako sa hrá",
      icon: <BookOpen className="w-5 h-5 mr-2" />,
    },
  },
  {
    id: 2,
    backgroundImage: heroBg,
    title: "Collector App",
    titleAccent: "Coming Soon",
    tagline: "Spravujte svoju zbierku digitálne!",
    description: "Sledujte svoje karty, objavujte nové a zdieľajte s komunitou.",
    primaryCta: { label: "Prihlásiť sa" },
    secondaryCta: { label: "Zistiť viac" },
  },
  {
    id: 3,
    backgroundImage: heroBg,
    title: "Svätci ako",
    titleAccent: "Hrdinovia",
    tagline: "100+ jedinečných kariet!",
    description: "Každá karta rozpráva príbeh. Spoznajte svätcov a ich odkaz.",
    primaryCta: { label: "Prezrieť karty" },
    secondaryCta: {
      label: "Objednať teraz",
      icon: <ShoppingCart className="w-5 h-5 mr-2" />,
    },
  },
];

const AUTO_ADVANCE_MS = 6000;

// 👇 Set this to your real navbar height (in px).
// Common values: 64 (h-16), 72, 80.
const NAVBAR_HEIGHT_PX = 80;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);

  const clearAutoAdvance = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoAdvance = useCallback(() => {
    clearAutoAdvance();
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, AUTO_ADVANCE_MS);
  }, [clearAutoAdvance]);

  useEffect(() => {
    startAutoAdvance();
    return () => clearAutoAdvance();
  }, [startAutoAdvance, clearAutoAdvance]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    startAutoAdvance();
  }, [startAutoAdvance]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    startAutoAdvance();
  }, [startAutoAdvance]);

  const goToSlide = useCallback(
    (index) => {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      startAutoAdvance();
    },
    [currentSlide, startAutoAdvance]
  );

  // ✅ Scroll right after the hero, but account for navbar height
  // (so the next section won't hide under the sticky navbar)
  const scrollToContent = () => {
    const heroEl = document.getElementById("hero");
    const nextEl = heroEl?.nextElementSibling;

    if (!nextEl) {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      return;
    }

    const top =
      window.scrollY +
      nextEl.getBoundingClientRect().top -
      NAVBAR_HEIGHT_PX -
      12; // extra breathing space

    window.scrollTo({ top, behavior: "smooth" });
  };

  const slide = heroSlides[currentSlide];

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? "100%" : "-100%", opacity: 0 }),
  };

  const contentVariants = {
    enter: { opacity: 0, y: 30 },
    center: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.1, duration: 0.75, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -16, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <section
      id="hero"
      className="
        relative flex items-center justify-center overflow-hidden
        min-h-[78vh] md:min-h-[70vh]
      "
      // ✅ push hero content down so it doesn't sit under the navbar
      style={{ paddingTop: NAVBAR_HEIGHT_PX }}
    >
      {/* Base brown layer so the "between slides" transition shows warm brown */}
      <div className="absolute inset-0 bg-[#2b1d14]" />

      {/* Background Carousel */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.95, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#2b1d14]"
        >
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b1d14]/85 via-[#2b1d14]/55 to-transparent" />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 w-full px-6 mx-auto max-w-7xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.id}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="max-w-2xl"
          >
            {/* ✅ a little bigger */}
            <h1 className="mb-4 font-display text-5xl font-bold leading-[1.05] text-[#f5f0e6] drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] md:text-6xl lg:text-7xl">
              {slide.title}{" "}
              {slide.titleAccent ? (
                <span className="inline-block bg-gradient-to-r from-[#caa45b] to-[#e1c27a] bg-clip-text text-transparent">
                  {slide.titleAccent}
                </span>
              ) : null}
            </h1>

            {/* ✅ a little bigger */}
            <p className="mb-3 font-body text-2xl italic text-[#f5f0e6]/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] md:text-3xl">
              {slide.tagline}
            </p>

            {/* ✅ a little bigger */}
            <p className="mb-10 max-w-xl font-body text-xl text-[#f5f0e6]/70 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              {slide.description}
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <button
                type="button"
                className="
                  inline-flex items-center justify-center
                  rounded-2xl px-7 py-4
                  font-display text-lg font-semibold
                  bg-[#caa45b] text-[#2b1d14]
                  shadow-[0_12px_34px_rgba(0,0,0,0.38)]
                  hover:bg-[#d6b56a]
                  active:translate-y-[1px]
                  transition
                "
              >
                {slide.primaryCta.icon}
                {slide.primaryCta.label}
              </button>

              <button
                type="button"
                className="
                  inline-flex items-center justify-center
                  rounded-2xl px-7 py-4
                  font-display text-lg font-semibold
                  border border-[#f5f0e6]/35
                  bg-white/10 text-[#f5f0e6]
                  backdrop-blur-sm
                  shadow-[0_12px_34px_rgba(0,0,0,0.28)]
                  hover:bg-white/15
                  active:translate-y-[1px]
                  transition
                "
              >
                {slide.secondaryCta.icon}
                {slide.secondaryCta.label}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute z-20 flex items-center gap-2 bottom-8 right-8">
        <button
          type="button"
          onClick={prevSlide}
          className="
            flex h-12 w-12 items-center justify-center
            rounded-xl
            border border-[#f5f0e6]/25
            bg-black/10 text-[#f5f0e6]
            backdrop-blur-sm
            hover:bg-white/10
            transition
          "
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="
            flex h-12 w-12 items-center justify-center
            rounded-xl
            border border-[#f5f0e6]/25
            bg-black/10 text-[#f5f0e6]
            backdrop-blur-sm
            hover:bg-white/10
            transition
          "
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute z-20 flex items-center gap-3 -translate-x-1/2 bottom-8 left-1/2">
        {heroSlides.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-[#caa45b] shadow-[0_6px_18px_rgba(0,0,0,0.35)]"
                : "w-2.5 bg-[#f5f0e6]/35 hover:bg-[#f5f0e6]/55"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator (slower + bigger) */}
      <motion.button
        type="button"
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.3 }}
        className="
          absolute bottom-24 left-1/2 z-20 -translate-x-1/2
          cursor-pointer
          text-[#f5f0e6]/65 hover:text-[#caa45b]
          transition-colors
        "
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-10 h-10" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
