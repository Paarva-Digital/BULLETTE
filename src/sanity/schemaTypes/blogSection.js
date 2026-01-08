export default {
  name: 'blogSection',
  title: 'Blog Section',
  type: 'object',

  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'EXPERIENCE',
    },

    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      initialValue:
        'Electrical lifestyle insights, safety tips & the latest from Bullette.',
    },

    {
      name: 'posts',
      title: 'Featured Blog Posts',
      description: 'Select 3 blog posts for homepage',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogPost' }] }],
      validation: Rule => Rule.max(3),
    },
  ],
}
