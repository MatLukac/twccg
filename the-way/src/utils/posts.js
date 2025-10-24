import yaml from "js-yaml";

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
  
  // Parse YAML front matter manually
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = text.match(frontMatterRegex);
  
  if (match) {
    const frontMatter = yaml.load(match[1]);
    const body = match[2];
    return { slug, ...frontMatter, body };
  }
  
  // Fallback if no front matter found
  return { slug, content: text };
}
