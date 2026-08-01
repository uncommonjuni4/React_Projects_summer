import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 🔥 New Tailwind plugin import kiya

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 🔥 Tailwind ko as a Vite plugin add kar diya
  ],
})