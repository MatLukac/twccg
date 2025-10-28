import React, { useState } from "react";
import { Heart, Users } from "lucide-react";

export default function SupportersList({ supporters = [] }) {
  const [showAll, setShowAll] = useState(false);

  const visibleSupporters = showAll ? supporters : supporters.slice(0, 5);

  return (
    <div className="md:max-w-7xl w-full md:mx-auto text-center md:scale-110 bg-[#FFF9EF]  rounded-2xl shadow-md p-8 mt-10">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Heart className="text-[#D7B264] w-6 h-6" />
        <h2 className="text-2xl font-semibold text-[#3E2F1C]">
          Naši podporovatelia
        </h2>
        
      </div>
      <p className="text-sm text-[#6C5B3E]">
        S veľkou vďakou myslíme na všetkých, ktorí nás podporili. <br />
        Tu uvádzame tých, ktorí prispeli 50 € a viac - ĎAKUJEME!
    </p>

      {supporters.length === 0 ? (
        <p className="text-[#6C5B3E]"></p>
      ) : (
        <ul className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
          {visibleSupporters.map((s, i) => (
            <li
              key={i}
              className="flex items-center gap-3 px-5 py-3 bg-white shadow-sm rounded-xl"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FDF6E8] ">
                <Heart className="w-5 h-5 text-[#D7B264]" />
              </div>
              <div>
                <p className="font-medium text-[#3E2F1C]">{s.name}</p>
                {s.amount && (
                  <p className="text-sm text-[#6C5B3E]">{s.amount} €</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {supporters.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 px-6 py-2 text-sm font-semibold text-white bg-[#D7B264] rounded-full hover:bg-[#EDC46E] transition-all shadow-md"
        >
          {showAll ? "Zobraziť menej" : "Zobraziť viac"}
        </button>
      )}
    </div>
  );
}
