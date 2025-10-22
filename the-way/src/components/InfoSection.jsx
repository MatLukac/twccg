import { Brain, Users, Layers, Sparkles } from "lucide-react";

export default function InfoSection() {
  const items = [
    {
      icon: <Brain className="w-10 h-10 mb-3 text-[#733417]" />,
      title: "Prepracovaná stratégia",
      subtitle: "Hlboké herné mechaniky & taktika",
    },
    {
      icon: <Users className="w-10 h-10 mb-3 text-[#733417]" />,
      title: "Rozrastajúca sa komunita",
      subtitle: "Každý deň pribúdajú noví hráči",
    },
    {
      icon: <Layers className="w-10 h-10 mb-3 text-[#733417]" />,
      title: "Originálne karty",
      subtitle: "Viac než 50 jedinečných kariet v hre",
    },
    {
      icon: <Sparkles className="w-10 h-10 mb-3 text-[#D7B264]" />,
      title: "Prémiová kvalita",
      subtitle: "Kvalitné tlačené karty & dizajn",
    },
  ];

  return (
    <section className="py-16 text-center">
      <div className="max-w-5xl px-4 mx-auto">
        <p className="mb-10 text-base text-[#411F0F] md:text-lg">
          Vitaj vo svete{" "}
          <span className="font-semibold text-[#733417]">The Way CCG</span> — 
          kartová hra s hlbokou stratégiou, rozrastajúcou sa komunitou 
          a originálnymi kartami. Objav svet plný taktiky, kreativity a 
          kvalitného dizajnu.
        </p>

        <div className="grid grid-cols-2 gap-10 mt-10 sm:grid-cols-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {item.icon}
              <h3 className="font-semibold text-[#411F0F]">{item.title}</h3>
              <p className="text-sm text-[#733417]/80">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
