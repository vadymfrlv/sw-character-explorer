import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), , svgr({ include: '**/*.svg' })],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      constants: '/src/constants',
      contexts: '/src/contexts',
      hooks: '/src/hooks',
      pages: '/src/pages',
      services: '/src/services',
      styles: '/src/styles',
      types: '/src/types',
      utils: '/src/utils',
    },
  },
});
