import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // FIX: Set the base path to '/' (the root) because your custom domain 
  // (e.g., www.yourdomain.com) serves the project from the root directory.
  // This ensures assets like CSS and JS are correctly loaded from /assets/...
  base: "/", 
  
  plugins: [
    tailwindcss(), 
    react()
  ]
})