import CMS from "decap-cms";

// Inicializácia CMS
CMS.init({
  config: {
    backend: {
      name: "github",
      repo: "MatLukac/twccg",
      branch: "main"
    },
    media_folder: "public/images/uploads",
    public_folder: "/images/uploads",
    collections: [
      {
        name: "articles",
        label: "Articles",
        folder: "src/articles",
        create: true,
        slug: "{{slug}}",
        format: "frontmatter",
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Date", name: "date", widget: "datetime" },
          { label: "Author", name: "author", widget: "string", default: "Wizards of the Coast" },
          { label: "Summary", name: "summary", widget: "text" },
          { label: "Body", name: "body", widget: "markdown" }
        ]
      }
    ]
  }
});
