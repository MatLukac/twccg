import React, { useState, useEffect, useRef } from "react";

export default function RulesCard() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [aspectType, setAspectType] = useState("standard"); // 'wide', 'tall', 'standard'
  const imgRef = useRef(null);

  const items = [
    { title: "Meno svätca", content: "Každý svätec má svoje meno napísané hore v strede." },
    { title: "Cnosti", content: "Cnosti sú vlastnosti reprezentované piatimi symbolmi, ktoré definujú svätca a jeho schopnosti. Zároveň charakterizujú, kam je možné svätca počas hry zaradiť." },
    { title: "Patrón", content: "Každý svätec patrí do určitej kategórie, ktorá určuje jeho patrónstvo." },
    { title: "Popis schopností karty", content: "Schopnosti karty určujú špeciálne efekty alebo výhody, ktoré môže svätec používať. Zároveň zistíš jeden z jeho citátov." },
    { title: "Vzácnosť karty", content: "Vzácnosť karty určuje, ako často sa karta objavuje v balíčkoch a akú hodnotu má v zbierke." },
    { title: "Učeník", content: "Karta otočená na rubovú stranu sa považuje za učeníka a predstavuje jeden symbol v ľubovoľnej kategórii cností." },
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


  const highlightAreas = {
    wide: [
      { top: "3%", left: "50%", width: "45%", height: "10%", translateX: "-50%" },
      { top: "13%", left: "22%", width: "20%", height: "10%", translateX: "0" },
      { top: "57%", left: "50%", width: "40%", height: "9%", translateX: "-50%" },
      { top: "65%", left: "50%", width: "70%", height: "30%", translateX: "-50%" },
      { top: "91%", left: "50%", width: "14%", height: "9%", translateX: "-50%" },
    ],
    tall: [
      { top: "3%", left: "50%", width: "74%", height: "9%", translateX: "-50%" },
      { top: "12%", left: "5.5%", width: "30%", height: "10%", translateX: "0" },
      { top: "57%", left: "50%", width: "52%", height: "9%", translateX: "-50%" },
      { top: "63%", left: "50%", width: "90%", height: "30%", translateX: "-50%" },
      { top: "90%", left: "50%", width: "25%", height: "9%", translateX: "-50%" },
    ],
    standard: [
      { top: "2.5%", left: "50%", width: "50%", height: "10%", translateX: "-50%" },
      { top: "12%", left: "18%", width: "22%", height: "10%", translateX: "0" },
      { top: "56%", left: "50%", width: "45%", height: "9%", translateX: "-50%" },
      { top: "64%", left: "50%", width: "68%", height: "30%", translateX: "-50%" },
      { top: "90%", left: "50%", width: "18%", height: "10%", translateX: "-50%" },
    ],
  };


  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const handleLoad = () => {
      const ratio = img.naturalWidth / img.naturalHeight;
      if (ratio > 0.8 && ratio < 1.3) setAspectType("standard");
      else if (ratio >= 1.3) setAspectType("wide");
      else setAspectType("tall");
    };

    if (img.complete) handleLoad();
    else img.addEventListener("load", handleLoad);

    return () => img.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className=" md:mx-24 my-10 mx-2 rounded-2xl shadow-md min-h-screen bg-[#fff9ec] flex flex-col items-center justify-center px-8 pb-12">
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
                    openIndex === index ? "text-[#D7B264]" : "text-gray-900 italic"
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

        {/* Pravá strana – karta */}
        <div className="relative flex justify-center w-full md:w-1/2 md:sticky md:top-24 perspective">
          {/* Kontajner s fixným pomerom strán */}
          <div
            className={`relative w-full max-w-[320px] aspect-[5/7] transition-transform duration-[1200ms] transform-style-preserve-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Predná strana */}
            <div className="absolute inset-0 backface-hidden">
              <img
                ref={imgRef}
                src={`${process.env.PUBLIC_URL}/materials/franta_full.png`}
                alt="Front of card"
                className="object-cover w-full h-full shadow-xl rounded-xl"
              />
            </div>

            {/* Zadná strana */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <img
                src={`${process.env.PUBLIC_URL}/materials/zad_full.png`}
                alt="Back of card"
                className="object-cover w-full h-full shadow-xl rounded-xl"
              />
            </div>

            {/* Zvýraznenie */}
            {openIndex !== null &&
              openIndex < highlightAreas[aspectType].length &&
              !isFlipped && (
                <div
                  className="absolute border-4 border-[#D7B264] rounded-md transition-all duration-700 ease-in-out opacity-100 shadow-[1px_1px_25px_#3b2a1a]"
                  style={{
                    ...highlightAreas[aspectType][openIndex],
                    transform: `translateX(${highlightAreas[aspectType][openIndex].translateX}) scale(1.02)`,
                  }}
                />
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
