import React from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug } from "../utils/posts";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export default function ArticlePage() {
  const { slug } = useParams();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    getPostBySlug(slug).then(setPost);
  }, [slug]);

  if (!post) return <p className="py-20 text-center">Načítavam...</p>;

  console.log(post);

  return (
    <article className="max-w-3xl px-4 py-10 mx-auto">
      <h1 className="mb-3 text-4xl font-bold">{post.title}</h1>
      <p className="mb-6 text-gray-500">
        {new Date(post.date).toLocaleDateString()} — {post.author}
      </p>

      <img
        src={post.image}
        alt={post.title}
        className="mb-6 shadow-md rounded-xl"
      />

      <img
        src="the-way/public/images/uploads/booster-front.png"
        alt={post.title}
        
      />

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: md.render(post.content) }}
      />
    </article>
  );
}
