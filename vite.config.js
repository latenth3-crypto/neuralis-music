import { defineConfig } from 'vite';

export default defineConfig({
  // Forces Vite to compile asset paths relatively, preventing deployment 404s
  base: './',
  build: {
    outDir: 'dist'
  }
});
