import cloudflare from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://fullctx.dev",
  adapter: cloudflare(),
  integrations: [tailwind()],
});
