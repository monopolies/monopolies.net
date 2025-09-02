// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
    site: SITE.website,
    vite: {
        plugins: [tailwindcss()],
    },
});
