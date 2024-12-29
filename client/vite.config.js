import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './dist', 
    rollupOptions: {
      input: {
        popup: 'index.html', 
        content: './public/content.js', 
        background: './public/background.js', 
      },
      output: {
 
        entryFileNames: '[name].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]',
      },
    },
  },
});
