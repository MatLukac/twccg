import React from "react";
import { Heart, HeartHandshake, Sparkles } from "lucide-react";

const CampaignSummary = ({
  amountRaised = 5000,
  goal = 5000,
  supporters = [
    { 
      name: "ACM Vinica", 
      logo: `${process.env.PUBLIC_URL}/materials/logo-acm-vinica-png-1024x637.png`,
      url: "https://acmvinica.sk"
    },
    { name: "Gabriel Oravec" },
    { 
      name: "Dom Quo Vadis", 
      logo: `${process.env.PUBLIC_URL}/materials/QVlogoXLmod2.png`,
      url: "https://domquovadis.sk"
    },
    { name: "Samuel Čutka" }
  ],
}) => {

  // poradie partnerov na mobile
  const mobileOrder = {
    "ACM Vinica": 1,
    "Dom Quo Vadis": 2,
    "Gabriel Oravec": 3,
    "Samuel Čutka": 4
  };

  const mobileOrderClasses = {
    1: "order-1",
    2: "order-2",
    3: "order-3",
    4: "order-4",
  };

  return (
    <section className="mx-2 my-10 md:mx-14">
      <div className="grid grid-cols-1 gap-12 scale-90 lg:grid-cols-2">

        {/* LEFT SECTION */}
        <div className="bg-[#FCF5DC] rounded-2xl shadow-md py-16 px-10 text-center flex flex-col items-center relative overflow-hidden">
          {/* Decorative Sparkles icon */}
          <Sparkles className="w-12 h-12 text-[#c19448] absolute top-4 right-4 opacity-30" />

          <h2 className="text-2xl md:text-3xl font-extrabold text-[#3b2a1a] mb-4 drop-shadow-sm">
            Kampaň na Doniu úspešne ukončená!
          </h2>

          <p className="text-[#5b4634] max-w-md text-lg leading-relaxed mb-8">
            Srdečne ďakujeme všetkým, ktorí sa rozhodli podporiť náš projekt. Vďaka vám môžu príbehy svätcov inšpirovať ďalších.
          </p>

          <div className="relative overflow-hidden bg-white border border-[#e7d9bc] rounded-2xl shadow-md px-10 py-8 w-full max-w-xs ring-1 ring-[#e8d9b7]/60">
            <p className="text-[#3b2a1a] text-xl font-semibold mb-1">Vyzbieraná suma</p>
            <p className="text-5xl font-bold text-[#c19448] tracking-tight drop-shadow-sm">
              {amountRaised.toLocaleString()} €
            </p>
            <p className="text-[#6a5644] mt-2 text-sm">
              Cieľ: <span className="font-medium">{goal.toLocaleString()} €</span>
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-[#F9F6EF] rounded-2xl shadow-md py-14 px-8 text-center lg:text-left relative">
          {/* Decorative Heart icon */}
          <Heart className="w-12 h-12 text-[#c19448] absolute top-4 right-4 opacity-30" />

          <div className="flex items-center justify-center lg:justify-center gap-2 text-2xl font-bold text-[#3b2a1a] mb-4">
            <h3>Ďakujeme našim partnerom</h3>
          </div>

          {supporters.length === 0 ? (
            <p className="text-[#5b4634] italic">
              Momentálne ešte nemáme partnerov, ale tešíme sa na spoluprácu!
            </p>
          ) : (
            <ul className="grid grid-cols-1 gap-2 sm:gap-6 sm:grid-cols-2">
              {supporters.map((s, idx) => {
                const orderValue = mobileOrder[s.name] || idx + 1;
                const orderClass = mobileOrderClasses[orderValue] || "";

                const Wrapper = s.url ? "a" : "div";

                return (
                  <li
                    key={idx}
                    className={`${orderClass} sm:order-none`}
                  >
                    <Wrapper
                      href={s.url}
                      target={s.url ? "_blank" : undefined}
                      rel={s.url ? "noopener noreferrer" : undefined}
                      className={`flex items-center gap-4 px-3 py-2 rounded transition-colors duration-200
                        ${s.url ? "hover:bg-[#f0e9d8] cursor-pointer" : ""}`}
                    >
                      {s.logo ? (
                        <img
                          src={s.logo}
                          alt={s.name}
                          className="object-contain rounded-md w-36 h-36 sm:w-40 sm:h-40"
                        />
                      ) : (
                        <div className="flex w-20 h-20 sm:h-36"></div>
                      )}

                      <span className="text-[#3b2a1a] font-semibold text-lg">
                        {s.name}
                      </span>
                    </Wrapper>
                  </li>
                );
              })}
            </ul>

          )}
        </div>

      </div>
    </section>
  );
};

export default CampaignSummary;
