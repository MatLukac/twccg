import fm from "front-matter";

export async function getAllPosts() {
  // pripojíme timestamp k URL, aby sme obišli cache
  const cacheBuster = `?v=${new Date().getTime()}`;
  const res = await fetch(`/articles.json${cacheBuster}`, {
    cache: "no-store",
  });
  const articles = await res.json();
  return articles;
}

export async function getPostBySlug(slug) {
  const cacheBuster = `?v=${new Date().getTime()}`;
  const res = await fetch(`/articles/${slug}.md${cacheBuster}`, {
    cache: "no-store",
  });
  const text = await res.text();
  const { attributes, body } = fm(text);
  return { slug, ...attributes, content: body };
}
