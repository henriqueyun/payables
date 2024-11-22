import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [    
    TanStackRouterVite(),
    react(),
    nodePolyfills({
      include: ['crypto', 'process', 'stream', 'util'],
      globals: { global: true },
    }),
  ],
})

