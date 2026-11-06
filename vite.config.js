import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://playzostudios.github.io/
export default defineConfig({
  plugins: [react()],
  base: '/',
});
