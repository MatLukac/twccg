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
  // Load all articles from articles.json
  const articles = await getAllPosts();
  
  // Find the article with matching slug
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    throw new Error(`Article with slug "${slug}" not found`);
  }
  
  return article;
}
