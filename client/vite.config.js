import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './dist', 
    rollupOptions: {
      input: {
        popup: 'index.html', // Entry point for your extension popup
        content: './public/content.js', // Entry point for content script
        background: './public/background.js', // Optional background script, if any
      },
      output: {
        // Ensures content.js is bundled correctly
        entryFileNames: '[name].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]',
      },
    },
  },
});
