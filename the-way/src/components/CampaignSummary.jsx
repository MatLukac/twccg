import React from "react";
import { Heart } from "lucide-react";
import { HeartHandshake } from "lucide-react";

const CampaignSummary = ({ amountRaised = 5000, goal = 5000, supporters = [] }) => {
  return (
    <section className="bg-[#FCF5DC] rounded-2xl shadow-md py-16 mx-2 md:mx-14 my-10">
      <div className="flex flex-col items-center max-w-5xl px-4 mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-[#3b2a1a] mb-3">
          Kampaň na Doniu úspešne ukončená!
        </h2>

        <p className="text-[#5b4634] max-w-2xl mb-6">
          Ďakujeme všetkým, ktorí prispeli na náš projekt. Spoločne sa nám
          podarilo dosiahnuť cieľ a projekt môže pokračovať ďalej.
        </p>

        {/* Amount Raised */}
        <div className="bg-white border border-[#e0d2b1] rounded-xl shadow-sm px-8 py-6 mb-10">
          <p className="text-[#3b2a1a] text-xl font-semibold mb-2">
            Vyzbieraná suma
          </p>
          <p className="text-4xl font-bold text-[#c19448]">
            {amountRaised.toLocaleString()} €
          </p>
          <p className="text-[#5b4634] mt-1">Cieľ: {goal.toLocaleString()} €</p>
        </div>

        {/* Supporters list */}
        <div className="flex items-center gap-2 text-2xl font-bold text-[#3b2a1a] mb-4">
        <h3>Naši Podporovatelia</h3>
        <HeartHandshake className="w-7 h-7 " />
        </div>

        {supporters.length === 0 ? (
          <p className="text-[#5b4634]">Zatiaľ bez záznamu podporovateľov.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl text-left">
            {supporters.map((name, idx) => (
              <li
                key={idx}
                className="flex items-center bg-white border border-[#e0d2b1] rounded-xl px-4 py-3 shadow-sm"
              >
                <Heart className="w-5 h-5 text-[#c19448] mr-3" />
                <span className="text-[#3b2a1a]">{name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default CampaignSummary;
