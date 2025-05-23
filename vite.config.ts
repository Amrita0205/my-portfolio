import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure the base path is correct for Vercel
  build: {
    outDir: 'dist', // Ensure build output directory
  },
});
