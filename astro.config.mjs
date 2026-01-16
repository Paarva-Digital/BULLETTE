// @ts-check
import { defineConfig } from 'astro/config'
import path from 'node:path'
import sanity from '@sanity/astro'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import pagefind from "astro-pagefind";
import netlify from '@astrojs/netlify';

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
    pagefind({
      // optional but recommended
      verbose: true,
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    optimizeDeps: {
      exclude: ['@sanity/astro'],
    },
  },

  adapter: isProd ? netlify() : undefined,
})
