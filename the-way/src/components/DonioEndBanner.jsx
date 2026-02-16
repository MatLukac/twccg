import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Trophy, Users, Heart } from "lucide-react";

const CampaignBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const target = 5000;
      const duration = 2000;
      const increment = target / (duration / 16);

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  // Colors matching your design
  const GOLD = "#c7a054";
  const BROWN_1 = "#3f2a1c";
  const BROWN_2 = "#4a3323";
  const CREAM = "#f3efe6";

  // Grid animation delays
  const LEFT_DELAY = 0.0;
  const CENTER_DELAY = 0.18;
  const RIGHT_DELAY = 0.36;

  return (
    <section className="px-4 md:px-0">
      <div
        ref={ref}
        className="
          relative overflow-hidden
          rounded-2xl
          py-16
          mt-10
          mx-4 md:mx-8 lg:mx-12
          shadow-md]
        "
        style={{
          background: `linear-gradient(90deg, ${BROWN_1}, ${BROWN_2}, ${BROWN_1})`,
        }}
      >
        {/* Diagonal pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          
        />

        <div className="relative px-6 mx-auto max-w-7xl">
          {/* 3-column grid */}
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-3">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: LEFT_DELAY }}
              className="text-center md:justify-self-start md:text-left"
            >
              <div className="flex items-center justify-center gap-2 mb-2 md:justify-start">
                <Trophy className="w-5 h-5" style={{ color: GOLD }} />
                <span
                  className="text-xs font-semibold tracking-[0.25em] uppercase"
                  style={{ color: GOLD }}
                >
                  ÚSPEŠNÁ KAMPAŇ
                </span>
              </div>

              <h3
                className="mb-2 text-2xl font-bold font-display md:text-3xl"
                style={{ color: CREAM }}
              >
                Vďaka vám sme to dokázali!
              </h3>

              <p className="text-sm md:text-base" style={{ color: `${CREAM}B3` }}>
                Naša crowdfundingová kampaň dosiahla cieľ
              </p>
            </motion.div>

            {/* Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: CENTER_DELAY }}
              className="text-center md:justify-self-center"
            >
              <div
                className="mb-1 text-5xl font-bold font-display md:text-6xl"
                style={{ color: GOLD }}
              >
                €{count.toLocaleString()}
              </div>
              <p className="text-sm" style={{ color: `${CREAM}99` }}>
                vyzbieraných
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: RIGHT_DELAY }}
              className="flex justify-center gap-10 md:justify-self-end"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Users className="w-5 h-5" style={{ color: GOLD }} />
                  <span
                    className="text-2xl font-bold font-display"
                    style={{ color: GOLD }}
                  >
                    150+
                  </span>
                </div>
                <p className="text-sm" style={{ color: `${CREAM}99` }}>
                  podporovateľov
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Heart className="w-5 h-5" style={{ color: GOLD }} />
                  <span
                    className="text-2xl font-bold font-display"
                    style={{ color: GOLD }}
                  >
                    100%
                  </span>
                </div>
                <p className="text-sm" style={{ color: `${CREAM}99` }}>
                  cieľ splnený
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignBanner;
