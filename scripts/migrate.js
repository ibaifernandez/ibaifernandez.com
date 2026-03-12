import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import TurndownService from "turndown";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WP_API_URL = "https://ibaifernandez.com/wp-json/wp/v2/posts";
const PER_PAGE = 100;
const OUTPUT_DIR = path.join(__dirname, "../src/content/blog");

const turndownService = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
});

// Avoid excessive Elementor divs creating bad markdown
turndownService.addRule("elementorDivs", {
  filter: ["div", "span", "section"],
  replacement: function (content) {
    return content.trim() ? `\n\n${content}\n\n` : "";
  },
});

async function fetchPosts(page = 1) {
  console.log(`Fetching page ${page}...`);
  const response = await fetch(
    `${WP_API_URL}?per_page=${PER_PAGE}&page=${page}&_embed=1`,
  );
  if (!response.ok) {
    if (response.status === 400) return []; // Reached end of pagination usually
    throw new Error(`API error: ${response.status}`);
  }
  const posts = await response.json();
  return posts;
}

async function getAllPosts() {
  let allPosts = [];
  let page = 1;
  while (true) {
    const posts = await fetchPosts(page);
    if (!posts || posts.length === 0) break;
    allPosts = allPosts.concat(posts);
    page++;
  }
  return allPosts;
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

    const posts = await getAllPosts();
    console.log(`Found ${posts.length} posts. Processing...`);

    for (const post of posts) {
      const slug = post.slug;
      const title = decodeHtml(post.title.rendered).replace(/"/g, '\\"');
      const date = post.date.split("T")[0];

      let heroImage = "/images/default-hero.jpg";
      if (
        post._embedded &&
        post._embedded["wp:featuredmedia"] &&
        post._embedded["wp:featuredmedia"][0]
      ) {
        const media = post._embedded["wp:featuredmedia"][0];
        if (media.source_url) {
          heroImage = media.source_url;
        }
      }

      // Convert content to Markdown
      let markdownContent = turndownService.turndown(post.content.rendered);

      // Clean up multiple empty lines
      markdownContent = markdownContent.replace(/\n{3,}/g, "\n\n");

      const frontmatter = `---
title: "${title}"
description: "${title}"
pubDate: "${date}"
heroImage: "${heroImage}"
categories: ["Artículos"]
---

${markdownContent}
`;

      const filePath = path.join(OUTPUT_DIR, `${slug}.mdx`);
      fs.writeFileSync(filePath, frontmatter, "utf-8");
      console.log(`Created: ${slug}.mdx`);
    }

    console.log("Migration completed successfully.");
  } catch (err) {
    console.error("Migration failed:", err);
  }
}

migrate();
