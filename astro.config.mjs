// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import mdx from '@astrojs/mdx';
import embeds from 'astro-embed/integration';

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
        forward: ["dataLayer.push"],
        debug: false
      }
    }),
    embeds(),
    mdx(),
  ],
  markdown: {
    remarkRehype: {
      footnoteLabel: "脚注"
    },
  },
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true
  }
});
