export default function RulesSumary() {
  return (
    <section className="px-6 py-16 font-sans text-white bg-[#291309]">
      <div className="max-w-4xl mx-auto text-left">
        {/* Nadpis */}
        <h2 className="mb-4 text-3xl font-extrabold tracking-wide text-center">
          Zhrnutie hry
        </h2>
        

        {/* Obsah */}
        <div className="pt-6 space-y-6 text-base leading-relaxed text-gray-200 border-t border-gray-600">
          {/* Cieľ hry */}
          <ul className="pl-5 space-y-2 list-disc">

            <li>  Každý hráč používa vlastný balíček obsahujúci presne 30 kariet. 
                <ul className="pl-6 mt-2 space-y-1 text-gray-300 list-disc">
                  <li> V balíčku môžu byť najviac tri kópie rovnakej karty, pričom musí obsahovať aspoň päť <em>Bežných</em> kariet. </li>
                  <li> Súčet kariet s raritou <em>Vzácna</em> a <em>Zázračná</em> nesmie presiahnuť desať. </li>
                  <li> Každú <em>Zázračnú</em> kartu možno zaradiť do balíčka iba v jednej kópii. </li>
                </ul>
            
            </li>

           

            <li>
              Začiatok hry:
              <ul className="pl-6 mt-2 space-y-1 text-gray-300 list-disc">
                <li>Každý hráč si dôkladne zamieša svoj balíček a položí ho lícom nadol a hráči si určia, kto začne ako prvý.</li>
                <li>Začínajúci hráč si potiahne 3 karty zo svojho balíčka na ruku a druhý hráč si potiahne 4 karty.</li>
                <li>Následne hra začína ťahom začínajúceho hráča.</li>
              </ul>
            </li>

            <li>
              Hráči sa striedajú v ťahoch. Počas svojho ťahu môže hráč vykonať jednu z nasledujúcich akcií:
              <ul className="pl-6 mt-2 space-y-1 text-gray-300 list-disc">
                <li>Zahrať 1 kartu z ruky a vyriešiť jej efekt; alebo</li>
                <li>
                  Potiahnuť 1 kartu z balíčka a následne urobiť jednu z voliteľných akcií:
                  <ul className="list-[circle] pl-6 mt-1 space-y-1">
                    <li>presunúť jednu svoju kartu na ploche do vhodného stĺpca; alebo</li>
                    <li>otočiť jedného zo svojich svätcov na učeníka.</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-3 italic text-gray-300">
                Pravidlo prázdnej ruky: ak má hráč na začiatku svojho ťahu 0 kariet na ruke, potiahne si namiesto bežnej akcie dve karty z
                balíčka.
              </p>
            </li>

            <li>
              Učeníci: 
              <ul className="pl-6 mt-2 space-y-1 text-gray-300 list-disc">
              <li> Karta otočená na rubovú stranu sa považuje za učeníka a predstavuje jeden symbol v ľubovoľnej kategórii
              cností. </li>
              </ul>
            </li>

            <li>
              Víťazstvo a prehra:
              <ul className="pl-6 mt-2 space-y-1 text-gray-300 list-disc">
                <li>Hráč vyhráva, ak ako prvý získal sedem symbolov v každej z aspoň troch rôznych kategórií.</li>
                <li>Hráč prehráva, ak nemá žiadne karty na ruke a zároveň je jeho balíček prázdny.</li>
              </ul>
            </li>

            
          </ul>
        </div>
      </div>
    </section>
  );
}
