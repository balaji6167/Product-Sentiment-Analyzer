import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Optional: Proxy API requests to Flask backend during development
    // This avoids CORS issues if running on the same machine but different ports
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:5000',
    //     changeOrigin: true,
    //     secure: false,
    //   }
    // }
  }
})