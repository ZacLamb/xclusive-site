import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        products: resolve(__dirname, 'products.html'),
        'how-it-works': resolve(__dirname, 'how-it-works.html'),
        apply: resolve(__dirname, 'apply.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
