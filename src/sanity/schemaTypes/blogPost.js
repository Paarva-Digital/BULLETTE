export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required(),
    },

    {
      name: 'excerpt',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    },

    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },

    {
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Bullette Editorial',
    },

    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      validation: Rule => Rule.required(),
    },

    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      subtitle: 'author',
    },
  },
}
