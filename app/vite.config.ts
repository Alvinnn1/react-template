import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
import * as path from 'path';
import babel from 'vite-babel-plugin';
import { VitePWA } from 'vite-plugin-pwa';
import viteCompression from 'vite-plugin-compression';
// @ts-ignore
import svgrPlugin from 'vite-plugin-svgr'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
    process.env.env === 'beta'
      ? viteCompression({ algorithm: 'gzip', ext: '.gz' })
      : viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
    VitePWA({
      strategies: 'generateSW',
      registerType: 'autoUpdate',
      workbox: {
        skipWaiting: true,
      },
      manifest: {
        name: 'CCBET',
        short_name: 'CCBET',
        description: 'CCBET',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    babel(),
    reactRefresh(),
  ],
  optimizeDeps: {
    exclude: [],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://kalista.jinuo.fun',
        changeOrigin: true,
      },
    },
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
});
