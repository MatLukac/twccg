import React from "react";
import { getAllPosts } from "../utils/posts";
import { Link } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getAllPosts()
      .then(setArticles)
      .finally(() => setLoading(false));
  }, []);

  const fixImagePath = (path) => {
    if (!path) return "/images/uploads/default.jpg";
    return path.replace(/^the-way\/public/, "").replace(/^public/, "");
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("sk-SK", options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-[#FCF5DC] py-16 border-b border-[#D7B264]/40">
        <div className="px-6 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-center text-[#411F0F] mb-4">
            Všetky články
          </h1>
          <p className="text-center text-[#733417]/80 max-w-2xl mx-auto">
            Objavte príbehy svätých, herné stratégie a inšpiráciu pre vašu duchovnú cestu
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="px-6 py-16 mx-auto max-w-7xl">
        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="inline-block w-12 h-12 border-4 border-[#733417] border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-[#733417]/70">Načítavam články...</p>
            </div>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-[#733417]/70">Zatiaľ žiadne články.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/article/${article.slug}`}
                className="overflow-hidden transition-all duration-300 bg-white border border-[#D7B264]/40 shadow-md group rounded-2xl hover:shadow-xl hover:border-[#D7B264] hover:-translate-y-1"
              >
                {/* Article Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={fixImagePath(article.image)}
                    alt={article.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  {article.category && (
                    <div className="absolute px-3 py-1 text-xs font-semibold text-[#411F0F] rounded-full top-4 left-4 bg-[#D7B264]">
                      {article.category}
                    </div>
                  )}
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Date and Author */}
                  <div className="flex items-center gap-2 mb-3 text-sm text-[#733417]/70">
                    <span>{formatDate(article.date)}</span>
                    {article.author && (
                      <>
                        <span>•</span>
                        <span>{article.author}</span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#411F0F] mb-3 line-clamp-2 group-hover:text-[#733417] transition-colors">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  {article.summary && (
                    <p className="text-[#733417]/80 text-sm line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  )}

                  {/* Read More */}
                  <div className="mt-4 flex items-center text-[#733417] font-medium text-sm group-hover:text-[#411F0F] transition-colors">
                    Čítať viac
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
