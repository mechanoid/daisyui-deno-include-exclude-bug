import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "@std/path";

const __dirname = import.meta.dirname as string;

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    cssMinify: false,
    rollupOptions: {
      input: {
        testcss: resolve(__dirname, "test.css"),
        // testjs: resolve(__dirname, "test.js"),
      },
    },
  },
});
