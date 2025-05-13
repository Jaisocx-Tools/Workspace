import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: './',
  root: __dirname, // tells Vite this config is local to packages/ui
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'), // allows imports like @/components/Button
      '@styles': path.resolve(__dirname, 'src/styles'), // allows imports like @/components/Button
    },
  },
  build: {
    outDir: 'dist', // output build folder relative to packages/ui
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {},
      less: {
        javascriptEnabled: true
      }
    }
  },
  server: {
    host: '0.0.0.0',     // <-- Important!
    port: 5173,          // Optional: default is 5173
    strictPort: true     // Fails if port is taken (safer in Docker)
  },
});
