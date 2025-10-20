import React from "react";
import { getAllPosts } from "../utils/posts";

export default function ArticlesList() {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    getAllPosts().then(setArticles);
  }, []);

  return (
    <section className="px-6 py-16 mx-auto mb-11 max-w-7xl bg-gray-50">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Najnovšie články
        </h2>
        <a
          href="/articles"
          className="inline-block mt-2 text-sm font-medium text-gray-800 hover:underline"
        >
          Zobraziť všetky články →
        </a>
      </div>

      {articles.length === 0 ? (
        <p className="text-center text-gray-500">Načítavam články...</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/article/${article.slug}`}
              className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-sm group rounded-xl hover:shadow-md"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={article.image || "/images/uploads/default.jpg"}
                  alt={article.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                {article.category && (
                  <div className="absolute px-3 py-1 text-xs font-semibold text-white rounded-full top-4 left-4 bg-sky-600">
                    {article.category}
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-800 transition-colors group-hover:text-sky-700">
                  {article.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                  {article.summary}
                </p>
                <div className="text-xs text-gray-400">
                  Autor: {article.author}
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
