import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  {
    title: "Kto spracúva vaše údaje",
    content: "Prevádzkovateľom osobných údajov podľa § 5 písm. o) zákona č. 18/2018 Z.z. o ochrane osobných údajov je spoločnosť (dopln janci). \n\n"  +
    
    "V prípade akýchkoľvek otázok nás môžete kontaktovať na e-mailovej adrese info@lebomadved.sk",
  },
  {
    title: "Kontakt na prevádzkovateľa",
    content: "Môžete nás kontaktovať na e-mailovej adrese: thewayccg@gmail.com.",
  },
  {
    title: "Aké údaje spracúvame",
    content: "Spracúvame minimálne potrebné údaje na komunikáciu alebo odber noviniek. Ide najmä o identifikačné a kontaktné údaje, ID zariadenia a súvisiace informácie k zariadeniu potrebné pre fungovanie služieb a prevádzku webu.",
  },
  {
    title: "Účel a právny základ spracovania",
    content: (
    <div className="space-y-4">
      <div>
        <p>Údaje spracúvame výhradne na nasledujúce účely:</p>
        <ul className="mt-1 ml-4 list-disc list-inside">
          <li>vybavenie objednávky a doručenie tovaru</li>
          <li>zákaznícka podpora</li>
          <li>vedenie účtu a zasielanie noviniek (pri súhlase)</li>
          <li>plnenie zákonných povinností (napr. účtovné doklady)</li>
        </ul>
      </div>

      <div>
        <p>Právnym základom je:</p>
        <ul className="mt-1 ml-4 list-disc list-inside">
          <li>plnenie zmluvy</li>
          <li>zákonná povinnosť</li>
          <li>súhlas alebo oprávnený záujem</li>
        </ul>
      </div>
    </div>
  ),
  },
  {
    title: "Príjemcovia údajov – poskytovatelia služieb",
    content: "Vaše údaje neposkytujeme nikomu.",
  },
  {
    title: "Bezpečnosť a uchovávanie údajov",
    content: "Údaje sú chránené primeranými technickými a organizačnými opatreniami. Prístup k osobným údajom majú len poverené osoby. \n\n" +
    "Údaje uchovávame len tak dlho, ako je potrebné na splnenie účelov spracovania alebo podľa zákonných požiadaviek. Po uplynutí tejto doby sú údaje bezpečne vymazané alebo anonymizované.",
  },
  {
    title: "Cookies a tretie strany",
    content: (
    <div className="space-y-4">
      <p>
        Súbory cookies sú malé textové súbory, ktoré sa ukladajú vo vašom
        počítači alebo mobilnom zariadení pri návšteve našej webovej stránky.
        Pomáhajú nám zlepšovať používateľský zážitok a správne fungovanie webu –
        ide o bežnú a bezpečnú prax väčšiny moderných stránok.
      </p>

      <p>
        Cookies umožňujú našej stránke zapamätať si vaše predchádzajúce
        aktivity a preferencie, ako napríklad prihlasovacie údaje, jazyk,
        veľkosť písma či nastavenia zobrazenia. Vďaka tomu nemusíte tieto údaje
        pri ďalšej návšteve zadávať znova.
      </p>

      <p>
        Pre správnu funkčnosť webu používame{" "}
        <strong>technické (nevyhnutné)</strong> cookies.{" "}
        <strong>Funkčné, analytické a marketingové</strong> cookies používame len
        na základe vášho súhlasu, ktorý môžete kedykoľvek odvolať. Povolením
        všetkých cookies nám pomáhate zlepšovať funkčnosť stránky, odhaľovať
        chyby, optimalizovať obsah a prispôsobovať reklamy vašim záujmom.
      </p>

      <p>
        Na analýzu a optimalizáciu webu využívame služby tretích strán –{" "}
        <strong>Google Analytics</strong>, <strong>Meta Pixel</strong> a{" "}
        <strong>Microsoft Clarity</strong>. Tieto služby zhromažďujú anonymné
        údaje o návštevnosti a správaní používateľov, ktoré využívame na analýzu
        a zlepšovanie našich služieb.
      </p>

      <div>
        <p>Viac informácií o spracovaní údajov nájdete na stránkach poskytovateľov:</p>
        <ul className="mt-2 ml-4 space-y-1 list-disc list-inside">
          <li>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b56b2a] hover:underline"
            >
              Google – zásady ochrany osobných údajov
            </a>
          </li>
          <li>
            <a
              href="https://clarity.microsoft.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b56b2a] hover:underline"
            >
              Microsoft – Clarity Privacy Statement
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/privacy/policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b56b2a] hover:underline"
            >
              Meta – zásady ochrany osobných údajov
            </a>
          </li>
        </ul>
      </div>

      <p>
        Nastavenia cookies môžete kedykoľvek zmeniť odstránením uložených
        cookies vo vašom prehliadači. Po ich vymazaní sa pri ďalšej návšteve
        zobrazí náš banner, kde si môžete znova vybrať svoje preferencie.
      </p>
    </div>
  ),
  },
  {
    title: "Vaše práva",
    content: "Máte právo na prístup, opravu, vymazanie a obmedzenie spracovania vašich údajov.",
  },
  {
    title: "Aktualizácia podmienok",
    content: "Tieto podmienky môžu byť aktualizované, naposledy dňa 25.10.2025.",
  },
];

export default function PrivacyPolicy() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className=" max-w-5xl my-10  bg-[#f7e7d1] text-[#4a2c00] p-8 rounded-2xl shadow-md">
      <h1 className="mb-4 text-2xl font-bold">Podmienky ochrany osobných údajov</h1>
      <p className="mb-6 text-sm leading-relaxed">
        Vaše súkromie je pre nás dôležité. Osobné údaje spracúvame podľa platných zákonov SR a GDPR tak, aby boli v maximálnom bezpečí. O vaše dáta sa starajú len poverené osoby a chránime ich vhodnými technickými a organizačnými opatreniami.
      </p>

      <div className="space-y-3">
        {sections.map((section, index) => (
          <div
            key={index}
            className="border-t border-[#d1b48a] pt-2"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left font-semibold py-2 hover:text-[#b56b2a] transition-colors"
            >
              {section.title}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-sm whitespace-pre-line text-[#4a2c00]/90 pb-3">
                    {section.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs text-[#4a2c00]/70 italic">
        Posledná aktualizácia: 25.10.2025
      </p>
    </div>
    </div>
  );
}
