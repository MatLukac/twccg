import React from "react";

const articles = [
  {
    id: 1,
    category: "Oznámenie",
    title: "Nové rozšírenie: Cesta žiaka prichádza!",
    description: "Predstavujeme prvé rozšírenie kartovej hry The Way CCG s novými kartami a mechanikami.",
    author: "Mat Lukáč",
    image: "/images/expansion.jpg",
    url: "/news/rozsirenie-cesta-ziaka",
  },
  {
    id: 2,
    category: "Komunita",
    title: "Stretnutie hráčov v Bratislave",
    description: "Zúčastni sa prvého komunitného stretnutia hráčov The Way CCG – turnaj, diskusie a zábava!",
    author: "The Way Team",
    image: "/images/event.jpg",
    url: "/news/stretnutie-hracov",
  },
  {
    id: 3,
    category: "Dizajn",
    title: "Ako vznikajú karty The Way",
    description: "Pozri sa do zákulisia – od prvého náčrtu až po finálnu tlač kariet.",
    author: "Tím vývojárov",
    image: "/images/design.jpg",
    url: "/news/ako-vznikaju-karty",
  },
];

export default function NewsGridTWCCG() {
  return (
    <section className="px-6 py-16 mx-auto mb-11 max-w-7xl bg-gray-50">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Najnovšie novinky!
        </h2>
        <a
          href="/news"
          className="inline-block mt-2 text-sm font-medium text-gray-800 hover:underline"
        >
          Zobraziť všetky články →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2">
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-sm group rounded-xl hover:shadow-md"
          >
            <div className="relative overflow-hidden h-52">
              <img
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute px-3 py-1 text-xs font-semibold text-white rounded-full top-4 left-4 bg-sky-600">
                {article.category}
              </div>
            </div>

            <div className="p-5">
              <h3 className="mb-2 text-lg font-semibold text-gray-800 transition-colors group-hover:text-sky-700">
                {article.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600">{article.description}</p>
              <div className="text-xs text-gray-400">Autor: {article.author}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
