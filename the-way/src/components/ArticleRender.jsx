import React from "react";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export default function ArticleRenderer({ content }) {
  return (
    <div className="mx-auto prose">
      {content.map((block, i) => {
        switch (block.type) {
          case "text":
            return (
              <div
                key={i}
                className="mb-6"
                dangerouslySetInnerHTML={{ __html: md.render(block.text) }}
              />
            );
          case "image":
            return (
              <figure key={i} className="my-8">
                <img
                  src={block.image}
                  alt={block.alt || ""}
                  className="w-full shadow-md rounded-xl"
                />
                {block.caption && (
                  <figcaption className="mt-2 text-center text-gray-600">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="pl-4 my-6 italic text-gray-700 border-l-4 border-gray-300"
              >
                “{block.quote}”
                {block.author && <footer className="mt-2 text-right">— {block.author}</footer>}
              </blockquote>
            );
          case "gallery":
            return (
              <div key={i} className="grid grid-cols-2 gap-4 my-6">
                {block.images.map((img, j) => (
                  <img key={j} src={img.image} alt="" className="shadow rounded-xl" />
                ))}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
