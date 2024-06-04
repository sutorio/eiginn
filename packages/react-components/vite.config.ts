/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import { readdir } from "node:fs/promises";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib.ts"),
    },
  },
  define: {
    // Strip in-source tests (blocks wrapped in `import.meta.vitest`) from the build output
    "import.meta.vitest": false,
  },
  plugins: [react()],
  test: {
    // Include all ts/x files; in-source testing is available, so tests do not have to be in discrete test files
    includeSource: ["src/**/*.{ts,tsx}"],
  },
});
