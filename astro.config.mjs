// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ibaifernandez.com",
  integrations: [sitemap(), tailwind()],
  adapter: netlify(),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
