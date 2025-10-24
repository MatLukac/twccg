// scripts/generateArticlesList.js
import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";

const articlesDir = path.resolve("public/articles");
const outputPath = path.resolve("public/articles.json");

async function generateArticlesList() {
  const files = await fs.readdir(articlesDir);
  const markdownFiles = files.filter((f) => f.endsWith(".md"));

  const articles = await Promise.all(
    markdownFiles.map(async (filename) => {
      const filePath = path.join(articlesDir, filename);
      const content = await fs.readFile(filePath, "utf-8");
      const { data, content: body } = matter(content);

      return {
        slug: filename.replace(".md", ""),
        title: data.title || "Bez názvu",
        date: data.date || new Date().toISOString(),
        author: data.author || "Neznámy autor",
        author_image: data.author_image || "",
        summary: data.summary || "",
        category: data.category || "",
        image: data.image || "",
        content: data.content || body, // Include full content/body
        body: body, // Keep raw markdown body as backup
      };
    })
  );

  // zoradíme podľa dátumu (najnovší prvý)
  articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  await fs.writeJson(outputPath, articles, { spaces: 2 });
  console.log(`✅ Generated ${articles.length} articles → ${outputPath}`);
}

generateArticlesList().catch((err) => {
  console.error("❌ Error generating articles list:", err);
  process.exit(1);
});
