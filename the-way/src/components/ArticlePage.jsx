// src/components/ArticlePage.jsx
export default function ArticlePage({ title, date, author, content }) {
  return (
    <div className="max-w-3xl p-6 mx-auto">
      <h1 className="mb-2 text-3xl font-bold">{title}</h1>
      <p className="mb-6 text-sm text-gray-500">
        {date} — {author}
      </p>
      <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
