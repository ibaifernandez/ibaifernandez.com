import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import TurndownService from "turndown";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WP_API_URL = "https://ibaifernandez.com/wp-json/wp/v2/pages";
const PER_PAGE = 100;
const OUTPUT_DIR = path.join(__dirname, "../src/pages/migradas");

const turndownService = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
});

turndownService.addRule("elementorDivs", {
  filter: ["div", "span", "section"],
  replacement: function (content) {
    return content.trim() ? `\n\n${content}\n\n` : "";
  },
});

async function fetchPages(page = 1) {
  console.log(`Fetching pages (page ${page})...`);
  const response = await fetch(
    `${WP_API_URL}?per_page=${PER_PAGE}&page=${page}`,
  );
  if (!response.ok) {
    if (response.status === 400) return [];
    throw new Error(`API error: ${response.status}`);
  }
  return await response.json();
}

async function getAllPages() {
  let allPages = [];
  let page = 1;
  while (true) {
    const pages = await fetchPages(page);
    if (!pages || pages.length === 0) break;
    allPages = allPages.concat(pages);
    page++;
  }
  return allPages;
}

function decodeHtml(html) {
  return html
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, "-")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, "...")
    .replace(/&#160;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

async function migrate() {
  try {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const pages = await getAllPages();
    console.log(`Found ${pages.length} pages. Processing...`);

    for (const pageItem of pages) {
      const slug = pageItem.slug;

      // Skip core pages we already built natively in Astro to avoid overriding them or causing routing conflicts
      if (
        [
          "inicio",
          "articulos",
          "conoceme",
          "sobre-mi",
          "contacto",
          "home",
          "blog",
        ].includes(slug.toLowerCase())
      ) {
        console.log(`Skipping core page: ${slug}`);
        continue;
      }

      const title = decodeHtml(pageItem.title.rendered).replace(/"/g, '\\"');
      const date = pageItem.date.split("T")[0];

      // Convert content to Markdown for easier readability
      let markdownContent = turndownService.turndown(pageItem.content.rendered);
      markdownContent = markdownContent.replace(/\n{3,}/g, "\n\n");

      const frontmatter = `---
import BaseLayout from '../../layouts/BaseLayout.astro';
const title = "${title}";
const description = "Página estática migrada desde WordPress - ${title}";
---

<BaseLayout title={title} description={description}>
  <main class="page-content">
    <div class="container">
      <h1 style="margin-top: 4rem; margin-bottom: 2rem;">{title}</h1>
      <div class="prose">
        
${markdownContent}

      </div>
    </div>
  </main>
</BaseLayout>
`;

      const filePath = path.join(OUTPUT_DIR, `${slug}.astro`);
      fs.writeFileSync(filePath, frontmatter, "utf-8");
      console.log(`Created: ${slug}.astro`);
    }

    console.log("Page migration completed successfully.");
  } catch (err) {
    console.error("Page migration failed:", err);
  }
}

migrate();
