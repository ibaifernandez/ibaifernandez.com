// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://ibaifernandez.com",
  integrations: [sitemap()],
  adapter: netlify(),
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
