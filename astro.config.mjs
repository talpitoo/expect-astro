// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/expect-agency/' : '/',
  vite: {
    plugins: [tailwindcss()],

    // Watch for changes in content (e.g. .yml) files
    server: {
      watch: {
        ignored: ['!**/src/content/**/*.{yaml,yml,md,mdx}']
      }
    }
  },

  devToolbar: {
    enabled: false,
  },

  // integrations: [react()],
});
