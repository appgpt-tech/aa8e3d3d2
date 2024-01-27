
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    base: '/aa8e3d3d2/',
    build: {
      outDir: '.output/aa8e3d3d2',
      emptyOutDir: true
    },
    server: {
      host: true,
      strictPort: true,
      port: 5173
    }
  })
