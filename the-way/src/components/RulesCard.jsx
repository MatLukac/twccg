import React, { useState } from "react";

export default function RulesCard() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const items = [
    { title: "Meno svätca", content: "Každý svätec má svoje meno napísané hore v strede." },
    { title: "Cnosti", content: "Cnosti sú vlastnosti, ktoré definujú svätca a jeho schopnosti. Zároveň charakterizujú, kam je možné svätca počas hry zaradiť." },
    { title: "Typ karty", content: "Každý svätec patrí do určitého typu, ktorý ovplyvňuje jeho rolu v hre." },
    { title: "Popis schopností karty, prípadne doplnkový text", content: "Schopnosti karty určujú špeciálne efekty alebo výhody, ktoré môže svätec používať." },
    { title: "Vzácnosť karty", content: "Vzácnosť určuje, ako často sa karta objavuje a akú hodnotu má v zbierke." },
    { title: "Učeník", content: "Niektoré karty môžu mať svojich učeníkov – tieto majú špeciálne efekty na druhej strane karty." },
  ];

  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
      setIsFlipped(false);
      return;
    }
    setOpenIndex(index);
    setIsFlipped(index === items.length - 1);
  };

  // 💛 Presné pozície a rozmery obdĺžnikov (v % voči výške a šírke obrázka)
  const highlightAreas = [
    { top: "6%", left: "50%", width: "60%", height: "7%", translateX: "-50%" }, // meno svätca
    { top: "17%", left: "18%", width: "25%", height: "8%", translateX: "0" }, // cnosti
    { top: "55%", left: "50%", width: "60%", height: "7%", translateX: "-50%" }, // typ karty
    { top: "64%", left: "50%", width: "80%", height: "18%", translateX: "-50%" }, // popis
    { top: "91%", left: "50%", width: "14%", height: "6%", translateX: "-50%" }, // vzácnosť
  ];

  return (
    <div className="min-h-screen bg-[#fff9ec] flex flex-col items-center justify-center px-8 py-12">
      <h1 className="mb-20 text-3xl italic font-extrabold text-center md:text-5xl">
        Čo je na karte svätca?
      </h1>

      <div className="flex flex-col items-start w-full max-w-5xl gap-10 md:flex-row">
        {/* Ľavý panel */}
        <div className="relative w-full space-y-4 md:w-1/2">
          {items.map((item, index) => (
            <div key={index} className="pb-2 border-b border-gray-300">
              <button
                onClick={() => toggleItem(index)}
                className="flex items-center justify-between w-full select-none focus:outline-none"
              >
                <span
                  className={`font-semibold text-left transition-colors duration-300 ${
                    openIndex === index
                      ? "text-[#D7B264]"
                      : "text-gray-900 italic"
                  }`}
                >
                  {item.title}
                </span>
                <span
                  className={`text-[#D7B264] font-extrabold text-2xl transform transition-transform duration-500 ease-in-out ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              {/* Popis */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "opacity-100 translate-y-0 max-h-40 mt-2"
                    : "opacity-0 -translate-y-2 max-h-0"
                }`}
              >
                <p className="text-sm leading-relaxed text-gray-700">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pravá strana - otočná karta */}
        <div className="relative flex justify-center w-full md:w-1/2 md:sticky md:top-24 perspective">
          <div
            className={`relative w-72 md:w-80 h-[430px] transition-transform duration-[1200ms] transform-style-preserve-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Predná strana */}
            <div className="absolute inset-0 backface-hidden">
              <img
                src={`${process.env.PUBLIC_URL}/materials/franta.png`}
                alt="Front of card"
                className="object-cover w-full h-full shadow-xl rounded-xl"
              />
            </div>

            {/* Zadná strana */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <img
                src={`${process.env.PUBLIC_URL}/materials/franta_back.png`}
                alt="Back of card"
                className="object-cover w-full h-full shadow-xl rounded-xl"
              />
            </div>
          </div>

          {/* Zvýraznenie (obdĺžnik) */}
          {openIndex !== null &&
            openIndex < highlightAreas.length &&
            !isFlipped && (
              <div
                className="absolute border-4 border-[#D7B264] rounded-md transition-all duration-700 ease-in-out opacity-100 shadow-[0_0_20px_#D7B26488]"
                style={{
                  top: highlightAreas[openIndex].top,
                  left: highlightAreas[openIndex].left,
                  width: highlightAreas[openIndex].width,
                  height: highlightAreas[openIndex].height,
                  transform: `translateX(${highlightAreas[openIndex].translateX}) scale(1.02)`,
                }}
              />
            )}
        </div>
      </div>
    </div>
  );
}
