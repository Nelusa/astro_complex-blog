import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog-cip.netlify.app",
  integrations: [image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), sitemap({
    filter: page => page !== "https://astro-blog-cip.netlify.app/about/"
  }), react(), tailwind(), mdx()]
});