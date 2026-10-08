import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Production domain — used for canonical URLs, Open Graph, and the sitemap.
const SITE = "https://www.nepaeng.com";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Static output — builds to ./dist and deploys to any cPanel/Apache host.
  output: "static",
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      changefreq: "monthly",
      priority: 0.7,
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
