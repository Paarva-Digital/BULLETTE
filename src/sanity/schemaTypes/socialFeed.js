import { defineField, defineType } from 'sanity'

const socialItem = defineType({
  name: 'socialItem',
  title: 'Social Item',
  type: 'object',

  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      initialValue: 'post',
      options: {
        list: [
          { title: 'Post', value: 'post' },
          { title: 'Reel / Video', value: 'reel' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Caption',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'date',
      title: 'Post Date',
      description: 'Used for ordering (latest first)',
      type: 'date',
    }),

    defineField({
      name: 'instagramUrl',
      title: 'Instagram Post / Reel URL',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['https'],
        }),
    }),

    defineField({
      name: 'image',
      title: 'Image (for posts)',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.type === 'reel',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.parent?.type === 'post' && !value) {
            return 'Image is required for posts'
          }
          return true
        }),
    }),

    defineField({
      name: 'video',
      title: 'Video File (optional)',
      type: 'file',
      options: { accept: 'video/*' },
      hidden: ({ parent }) => parent?.type !== 'reel',
    }),

    defineField({
      name: 'thumbnail',
      title: 'Video Thumbnail (required for reels)',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.type !== 'reel',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.parent?.type === 'reel' && !value) {
            return 'Video thumbnail is required for reels'
          }
          return true
        }),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      type: 'type',
      postImage: 'image',
      reelThumb: 'thumbnail',
    },
    prepare({ title, type, postImage, reelThumb }) {
      return {
        title: title || 'Social Feed Item',
        subtitle: type === 'reel' ? 'Instagram Reel' : 'Instagram Post',
        media: type === 'reel' ? reelThumb : postImage,
      }
    },
  },
})

const socialFeed = defineType({
  name: 'socialFeed',
  title: 'Social Feed',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Section Subheading',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Feed Items',
      type: 'array',
      of: [{ type: 'socialItem' }],
    }),
  ],
})

export { socialItem, socialFeed }
export default socialFeed
