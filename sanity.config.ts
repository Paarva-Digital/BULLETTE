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
              name: 'bullette',
              apiId: 'a8b497e5-ca2b-4704-8b2f-709e6f642b03',
              buildHookId: '696415b798dfcda0acc20457',
              url: 'https://bullette.netlify.app/',
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
