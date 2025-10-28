import { useState } from "react";

export default function RulesBegin() {
  const [hovered, setHovered] = useState(null);

  const symbols = [
    {
      id: "book",
      name: "Kniha",
      img: `${process.env.PUBLIC_URL}/materials/book.png`,
      desc: "Vyjadruje prínos v oblasti učenia, rozvoj cirkevných znalostí a obhajobu viery.",
    },
    {
      id: "drop",
      name: "Kvapka",
      img: `${process.env.PUBLIC_URL}/materials/drop.png`,
      desc: "Označuje askézu a obetavosť, odráža svätcovo utrpenie pre vieru.",
    },
    {
      id: "fire",
      name: "Oheň",
      img: `${process.env.PUBLIC_URL}/materials/fire.png`,
      desc: "Vyjadruje zápal pre vieru a nadšenie pre šírenie evanjelia.",
    },
    {
      id: "heart",
      name: "Srdce",
      img: `${process.env.PUBLIC_URL}/materials/heart.png`,
      desc: "Symbol lásky k druhým, starostlivosti a spravodlivého vedenia.",
    },
    {
      id: "prayer",
      name: "Modlitba",
      img: `${process.env.PUBLIC_URL}/materials/prayer.png`,
      desc: "Predstavuje silu modlitby, výnimočný duchovný život a zázraky.",
    },
  ];

  return (
    <section className="px-6 pb-16 text-center text-gray-700 pt-14">
      <div className="max-w-6xl mx-auto md:text-xl">
        <p className="mb-6">
          V hre <span className="font-semibold text-gray-900">The Way of The Disciple</span> sa dvaja hráči snažia preukázať svoju múdrosť a cnosť.
        </p>
        <p className="mb-6">
          Získavajú symboly reprezentujúce jednu z piatich cností prostredníctvom svätcov, ktorí sa v priebehu hry môžu meniť na učeníkov.
        </p>
        <p className="mb-12">
          Cieľom je získať sedem symbolov v troch rôznych kategóriách cností a tým dosiahnuť duchovné víťazstvo.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
          {symbols.map((sym) => (
            <div
              key={sym.id}
              className={`flex flex-col items-center p-4 rounded-2xl transition-all duration-300 text-center
                ${hovered === sym.id ? "md:scale-110 md:shadow-xl md:bg-gray-100" : ""}
                ${sym.id === "prayer" ? "col-span-2 sm:col-span-1 justify-self-center" : ""}
              `}
              onMouseEnter={() => setHovered(sym.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={sym.img}
                alt={sym.name}
                className="w-20 h-20 mb-4 transition-transform duration-300"
              />
              <h3 className="text-xl font-bold tracking-wide">{sym.name}</h3>

              {/* Text má stále rovnaký layout height, len sa stáva neviditeľným */}
              <p
                className={`mt-3 text-sm text-gray-600 max-w-[180px] transition-opacity duration-300 min-h-[48px]
                  ${
                    hovered === sym.id
                      ? "md:opacity-100 md:visible"
                      : "md:opacity-0 md:invisible"
                  }
                  opacity-100 visible md:transition-opacity
                `}
              >
                {sym.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
