import {defineConfig} from 'vite';
import path from 'path';

export default defineConfig({
  // Simple static server configuration
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
