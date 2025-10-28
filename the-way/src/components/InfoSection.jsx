import { MapPin, Palette, Brain, Sparkles } from "lucide-react";

export default function InfoSection() {
  const items = [
    {
      icon: <MapPin className="w-10 h-10 mb-3 text-[#733417]" />,
      title: "Cesta, nie len hra",
      subtitle: "Objav svet, kde víťazstvo neprichádza silou, ale dobrotou. Každá partia je novou kapitolou na ceste svätosti.",
    },
    {
      icon: <Sparkles className="w-10 h-10 mb-3 text-[#733417]" />,
      title: "Svätci ako hrdinovia",
      subtitle: "Zoznám sa s desiatkami svätcov-odvážnych, múdrych, pokorných. Každá karta rozpráva ich príbeh a inšpiruje tvoj vlastný.",
    },
    {
      icon: <Brain className="w-10 h-10 mb-3 text-[#733417]" />,
      title: "Zmysluplná stratégia",
      subtitle: "Kombinuj cnosti, schopnosti a taktiku. Víťazstvo čaká tých, ktorí dokážu spojiť múdrosť s vnútornou silou.",
    },
    {
      icon: <Palette  className="w-10 h-10 mb-3 text-[#733417]" />,
      title: "Krása v každom detaile",
      subtitle: "Ručne maľované ilustrácie, citáty a dizajn vytvorený s láskou – pretože aj umenie môže viesť k niečomu vyššiemu.",
    },
  ];

  return (
    <section className="py-16 text-center">
      <div className="max-w-5xl px-4 mx-auto">
        <p className="mb-10 text-base text-[#411F0F] md:text-lg">
          Vitaj vo svete{" "}
          <span className="font-semibold text-[#733417]">The Way of the Disciple</span> — 
          zberateľskej kartovej hre, ktorá ti ukáže, že svätosť nie je nuda, ale najväčšie dobrodružstvo života.

          

     
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
