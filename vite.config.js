import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "./nginx/dist",
  },
  test: {
    include: ["src/tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
