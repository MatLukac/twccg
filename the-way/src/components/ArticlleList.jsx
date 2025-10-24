import React from "react";
import { getAllPosts } from "../utils/posts";
import { Link } from "react-router-dom";

export default function ArticlesList() {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    getAllPosts().then(setArticles);
  }, []);

  return (
    <section className="px-6 py-16 mx-auto mb-11 max-w-7xl bg-[#FCF5DC]">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-[#411F0F]">Najnovšie články</h2>
        <Link
          to="/articles"
          className="inline-block mt-2 text-sm font-medium text-[#733417] hover:underline"
        >
          Zobraziť všetky články →
        </Link>
      </div>

      {articles.length === 0 ? (
        <p className="text-center text-[#733417]/70">Načítavam články...</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/article/${article.slug}`}
              className="overflow-hidden transition-all duration-300 bg-[#FCF5DC] border border-[#D7B264]/40 shadow-md group rounded-2xl hover:shadow-lg hover:border-[#D7B264]"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={article.image || "/images/uploads/default.jpg"}
                  alt={article.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                {article.category && (
                  <div className="absolute px-3 py-1 text-xs font-semibold text-[#411F0F] rounded-full top-4 left-4 bg-[#D7B264]">
                    {article.category}
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-[#411F0F] transition-colors group-hover:text-[#733417]">
                  {article.title}
                </h3>
                <p className="mb-4 text-sm text-[#733417]/80 line-clamp-3">
                  {article.summary}
                </p>
                <div className="text-xs text-[#733417]/60">
                  Autor: {article.author}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
