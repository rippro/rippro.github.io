// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://rippro.github.io',
  integrations: [
    tailwind({
      nesting: true
    }) , 
    icon(), 
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    }),
  ],
  markdown: {
    remarkRehype: {
      footnoteLabel: "脚注"
    },
    shikiConfig: {
      themes: {
        light: "catppuccin-frappe", 
        dark: "catppuccin-macchiato",
      }
    }
  },
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true
  }
});
