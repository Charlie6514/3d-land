import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages project sites (e.g. username.github.io/my-repo),
// set base to '/my-repo/'. For user/org pages (username.github.io), keep '/'.
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  base,
})
