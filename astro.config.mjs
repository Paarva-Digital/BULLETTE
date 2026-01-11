// @ts-check
import { defineConfig } from 'astro/config'
import path from 'node:path'

import sanity from '@sanity/astro'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@astrojs/netlify'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  integrations: [
    sanity({
      projectId: '7c02o7qh',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2026-01-07',
      studioBasePath: '/admin',
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    // 🔑 Prevent Vite from choking on Sanity + Netlify
    optimizeDeps: {
      exclude: ['@sanity/astro'],
    },
  },

  adapter: isProd ? netlify() : undefined,
})
