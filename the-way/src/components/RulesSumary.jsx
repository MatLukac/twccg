export default function RulesSummary() {
  return (  
    <section className="px-6 py-16 md:mx-24 my-10 mx-2 font-sans text-white rounded-2xl shadow-md bg-[#291309]">
      <div className="max-w-4xl mx-auto text-left">
        {/* Nadpis */}
        <h2 className="mb-2 text-3xl font-extrabold tracking-wide text-center uppercase">
          ZHRNUTIE HRY
        </h2>

        {/* Tlačidlo na PDF */}
        <div className="flex justify-center mb-8">
          <a
            href={`${process.env.PUBLIC_URL}/materials/pravidla_full.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-16 py-3 mx-auto font-semibold text-[#291309] transition-all bg-[#D7B264] rounded-full shadow-lg mt-9 hover:bg-[#F0C66F]"
          >
            Zobraziť celé pravidlá
          </a>
        </div>

        {/* Obsah */}
        <div className="pt-6 space-y-6 text-base leading-relaxed text-gray-200 border-t border-gray-600 ">
          <ul className="pl-5 space-y-4 list-disc md:pl-20">

            <li>
              Každý hráč má balíček s 30 kartami.
              <ul className="pl-6 mt-2 space-y-1 text-gray-300 list-disc">
                <li>V balíčku môžu byť najviac tri kópie rovnakej karty.</li>
                <li>Balíček musí obsahovať aspoň päť <em>Bežných</em> kariet.</li>
                <li>Súčet <em>Vzácnych</em> a <em>Zázračných</em> kariet nesmie presiahnuť desať.</li>
                <li>Každú <em>Zázračnú</em> kartu možno zaradiť iba raz.</li>
              </ul>
            </li>

            <li>
              Náhodne sa určí, kto začne prvý (napr. hodom mince).
            </li>

            <li>
              Každý hráč si zamieša svoj balíček a potiahne karty:
              <ul className="pl-6 mt-2 space-y-1 text-gray-300 list-disc">
                <li>Začínajúci hráč ťahá 3 karty.</li>
                <li>Druhý hráč ťahá 4 karty.</li>
              </ul>
            </li>

            <li>
              Hráči sa striedajú v ťahoch. Počas svojho ťahu môže hráč vykonať jednu z nasledujúcich akcií:
              <ul className="pl-6 mt-2 space-y-1 text-gray-300 list-disc">
                <li>Zahrať jednu kartu z ruky a vyriešiť jej efekt, alebo</li>
                <li>
                  Potiahnuť jednu kartu z balíčka a následne:
                  <ul className="pl-6 mt-1 space-y-1 list-[circle]">
                    <li>presunúť svoju kartu na ploche do vhodného stĺpca, alebo</li>
                    <li>otočiť jedného zo svojich svätcov na učeníka.</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-3 italic text-gray-300">
                Ak má hráč na začiatku ťahu prázdnu ruku, namiesto bežnej akcie si potiahne dve karty.
              </p>
            </li>

            <li>
              Karta otočená na rubovú stranu sa považuje za učeníka.
              <ul className="pl-6 mt-2 text-gray-300 list-disc">
                <li>Učeník predstavuje jeden symbol v ľubovoľnej kategórii cností.</li>
              </ul>
            </li>

            <li>
              Víťazstvo a prehra:
              <ul className="pl-6 mt-2 space-y-1 text-gray-300 list-disc">
                <li>Hráč vyhráva, ak získa sedem symbolov v aspoň troch rôznych kategóriách.</li>
                <li>Hráč prehráva, ak nemá žiadne karty na ruke a jeho balíček je prázdny.</li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
}
