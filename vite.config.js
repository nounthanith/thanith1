import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/thanith1/', // This should be at the root level
  plugins: [
    react(), // Plugin for React
    tailwindcss(), // Plugin for TailwindCSS
  ],
});
