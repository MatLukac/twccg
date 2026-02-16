import React from "react";
import { Heart, Sparkles } from "lucide-react";

const CampaignSummary = ({
  amountRaised = 5000,
  goal = 5000,
  supporters = [
    { 
      name: "ACM Vinica", 
      logo: `${process.env.PUBLIC_URL}/materials/logo-acm-vinica-png-1024x637.png`,
      url: "https://www.mladezba.sk/"
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
      <div className="grid grid-cols-1 gap-12 scale-90 lg:grid-cols-2 ">

        {/* LEFT SECTION */}
        <div className="bg-[#FCF5DC] rounded-2xl shadow-md py-16 px-10 text-center flex flex-col items-center relative overflow-hidden justify-center">
          <Sparkles className="w-12 h-12 text-[#c19448] absolute top-4 right-4 opacity-30" />

          <h2 className="text-2xl md:text-3xl font-extrabold text-[#3b2a1a] mb-4">
            Kampaň na Doniu úspešne ukončená!
          </h2>

          <p className="text-[#5b4634] max-w-md text-lg leading-relaxed mb-8">
            Srdečne ďakujeme všetkým, ktorí sa rozhodli podporiť náš projekt.
            Vďaka vám môžu príbehy svätcov inšpirovať ďalších.
          </p>

          <div className="bg-white border border-[#e7d9bc] rounded-2xl shadow-md px-10 py-8 w-full max-w-xs">
            <p className="text-[#3b2a1a] text-xl font-semibold mb-1">
              Vyzbieraná suma
            </p>
            <p className="text-5xl font-bold text-[#c19448]">
              {amountRaised.toLocaleString()} €
            </p>
            <p className="text-[#6a5644] mt-2 text-sm">
              Cieľ: <span className="font-medium">{goal.toLocaleString()} €</span>
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-[#F9F6EF] rounded-2xl shadow-md py-14 px-8 text-center relative">
          <Heart className="w-12 h-12 text-[#c19448] absolute top-4 right-4 opacity-30" />

          <h3 className="text-2xl font-bold text-[#3b2a1a] mb-8">
            Ďakujeme našim partnerom
          </h3>

          {supporters.length === 0 ? (
            <p className="text-[#5b4634] italic">
              Momentálne ešte nemáme partnerov.
            </p>
          ) : (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 place-items-center">
              {supporters.map((s, idx) => {
                const orderValue = mobileOrder[s.name] || idx + 1;
                const orderClass = mobileOrderClasses[orderValue] || "";
                const Wrapper = s.url ? "a" : "div";

                return (
                  <li
                    key={idx}
                    className={`${orderClass} sm:order-none w-full flex justify-center`}
                  >
                    <Wrapper
                      href={s.url}
                      target={s.url ? "_blank" : undefined}
                      rel={s.url ? "noopener noreferrer" : undefined}
                      className={`
                        flex flex-col items-center justify-center
                        bg-white border border-[#e7d9bc]
                        rounded-xl shadow-sm
                        px-4 py-6
                        w-full max-w-xs
                        h-56
                        transition
                        ${s.url ? "hover:bg-[#f0e9d8] hover:scale-[1.02]" : ""}
                      `}
                    >
                      {/* LOGO / PLACEHOLDER */}
                      {s.logo ? (
                        <img
                          src={s.logo}
                          alt={s.name}
                          className="object-contain h-24 mb-4"
                        />
                      ) : (
                        <div >
                         <span className="text-[#3b2a1a] font-semibold text-center text-lg">
                        {s.name}
                      </span>
                        </div>
                      )}

                      {/* NAME */}
                      
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
