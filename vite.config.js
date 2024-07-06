import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteYaml from '@modyfi/vite-plugin-yaml'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteYaml(),
  ],
  base: "http://jlthompso.github.io/project-portfolio-page/",
})
