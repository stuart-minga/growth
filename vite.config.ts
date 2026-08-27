import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/growth/',
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['buffer'],
  },
  define: {
    global: 'globalThis',
  },
})
