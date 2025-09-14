import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/sleepoutside/", // 👈 ajoute ça (nom exact de ton repo)

  root: "src",

  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        product: resolve(__dirname, "src/product_pages/index.html"),
      },
    },
  },

  server: {
    port: 5500,
  },
});
