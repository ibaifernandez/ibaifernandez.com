import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WP_API_URL = "https://ibaifernandez.com/wp-json/wp/v2/media";
const PER_PAGE = 100;
const OUTPUT_DIR = path.join(__dirname, "../src/assets/wp-media");

async function fetchMedia(page = 1) {
  console.log(`Fetching media (page ${page})...`);
  const response = await fetch(
    `${WP_API_URL}?per_page=${PER_PAGE}&page=${page}`,
  );
  if (!response.ok) {
    if (response.status === 400) return [];
    throw new Error(`API error: ${response.status}`);
  }
  return await response.json();
}

async function getAllMedia() {
  let allMedia = [];
  let page = 1;
  while (true) {
    const media = await fetchMedia(page);
    if (!media || media.length === 0) break;
    allMedia = allMedia.concat(media);
    page++;
  }
  return allMedia;
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
          return;
        }
        response.pipe(file);
        file.on("finish", () => {
          file.close(() => resolve(dest));
        });
      })
      .on("error", (err) => {
        fs.unlink(dest, () => reject(err));
      });
  });
}

async function migrate() {
  try {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const mediaItems = await getAllMedia();
    console.log(`Found ${mediaItems.length} media items. Downloading...`);

    let count = 0;
    for (const item of mediaItems) {
      if (!item.source_url) continue;

      const url = item.source_url;
      // Extract filename from URL
      const filename = path.basename(new URL(url).pathname);
      const destPath = path.join(OUTPUT_DIR, filename);

      try {
        if (!fs.existsSync(destPath)) {
          console.log(
            `[${count + 1}/${mediaItems.length}] Downloading: ${filename}...`,
          );
          await downloadFile(url, destPath);
        } else {
          console.log(
            `[${count + 1}/${mediaItems.length}] Skipped (already exists): ${filename}`,
          );
        }
        count++;
      } catch (err) {
        console.error(`Error downloading ${filename}: ${err.message}`);
      }
    }

    console.log(
      `Media migration completed successfully. Handled ${count} items.`,
    );
  } catch (err) {
    console.error("Media migration failed:", err);
  }
}

migrate();
