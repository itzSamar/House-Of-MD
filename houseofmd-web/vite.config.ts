import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the same build works on:
  // - custom domain root (https://www.thehouseofmd.com/)
  // - GitHub project pages (https://itzsamar.github.io/House-Of-MD/)
  base: './',
})
