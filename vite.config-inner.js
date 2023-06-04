import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        inner: resolve(__dirname, "inner.html"),
      },
    },
  },
});
