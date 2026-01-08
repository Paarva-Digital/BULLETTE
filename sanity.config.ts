// ./sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { dashboardTool } from '@sanity/dashboard'
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,

  plugins: [
    structureTool(),

    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Netlify Deploy',
          sites: [
            {
              title: 'Website',
              name: 'bullette-website',
              apiId: 'c7817403-1aa0-4980-9e77-8689ae882dda',
              buildHookId: '695fecda7c0eb49154d285eb',
              url: 'https://bullette-website.netlify.app',
            },
          ],
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
