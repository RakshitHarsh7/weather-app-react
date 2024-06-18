import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/weather-app-react/',
  plugins: [react()],
  build: {
    outDir: 'build', // Ensure the output directory is set to 'build'
  },
})
