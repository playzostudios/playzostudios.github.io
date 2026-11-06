import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://agentsamad.github.io/PlayzoWebsite/
export default defineConfig({
  plugins: [react()],
  base: '/PlayzoWebsite/',
});
