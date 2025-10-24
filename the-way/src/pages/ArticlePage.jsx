import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostBySlug } from "../utils/posts";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

export default function ArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    getPostBySlug(slug).then((data) => {
      console.log("Post data:", data);
      console.log("Content type:", typeof data.content);
      console.log("Content:", data.content);
      setPost(data);
    });
  }, [slug]);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Načítavam článok...</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("sk-SK", options);
  };

  const fixImagePath = (path) => {
    if (!path) return "";
    // Remove "the-way/public" prefix if it exists
    return path.replace(/^the-way\/public/, "").replace(/^public/, "");
  };

  const renderContent = () => {
    // Check if content exists and is an array (YAML structured content)
    if (post.content && Array.isArray(post.content)) {
      return post.content.map((item, index) => {
        if (item.type === "text" && item.text) {
          return (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: md.render(item.text) }}
            />
          );
        } else if (item.type === "image" && item.image) {
          return (
            <figure key={index} className="my-8">
              <img
                src={fixImagePath(item.image)}
                alt={item.alt || ""}
                className="w-full rounded-lg shadow-lg"
              />
              {item.caption && (
                <figcaption className="mt-3 text-sm text-center text-gray-600 italic">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          );
        }
        return null;
      });
    }
    // Fallback: if content is a string or doesn't exist, render it as markdown
    else if (typeof post.content === "string") {
      return <div dangerouslySetInnerHTML={{ __html: md.render(post.content) }} />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Navigation */}
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl px-4 py-4 mx-auto">
          <button
            onClick={() => navigate("/articles")}
            className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="font-medium">Späť na články</span>
          </button>
        </div>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl px-4 pt-12 pb-8 mx-auto">
        <div className="mb-6">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            {post.title}
          </h1>
          
          {post.summary && (
            <p className="text-xl leading-relaxed text-gray-600">
              {post.summary}
            </p>
          )}
        </div>

        {/* Author & Date Info */}
        <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
          {post.author_image && (
            <img
              src={fixImagePath(post.author_image)}
              alt={post.author}
              className="w-12 h-12 rounded-full ring-2 ring-gray-100"
            />
          )}
          <div>
            <p className="font-semibold text-gray-900">{post.author}</p>
            <p className="text-sm text-gray-500">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </p>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {post.image && (
        <div className="max-w-5xl px-4 mx-auto mb-12">
          <img
            src={fixImagePath(post.image)}
            alt={post.title}
            className="w-full shadow-2xl rounded-xl"
          />
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-3xl px-4 pb-20 mx-auto">
        <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-strong:font-semibold prose-img:rounded-lg prose-img:shadow-lg">
          {renderContent()}
        </div>

        {/* Article Footer */}
        <div className="pt-12 mt-12 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 font-medium text-gray-700 transition-all bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              ← Späť na články
            </button>
            
            <div className="flex gap-3">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-6 py-3 font-medium text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                ↑ Späť hore
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
