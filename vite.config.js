import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base must match the repo name so assets load on GitHub Pages
// (https://markstaelens-alan.github.io/basic-website/).
export default defineConfig({
  plugins: [react()],
  base: '/basic-website/',
});
