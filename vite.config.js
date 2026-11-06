import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://agentsamad.github.io/playzo/
export default defineConfig({
  plugins: [react()],
  base: '/playzo/',
});
