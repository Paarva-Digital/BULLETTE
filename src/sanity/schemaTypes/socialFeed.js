export default {
  name: 'socialFeed',
  title: 'Social Feed',
  type: 'object',

  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'BORN TO BUILD',
    },

    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      initialValue: 'Social Feed',
    },

    {
      name: 'items',
      title: 'Social Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialItem',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Post (Image)', value: 'post' },
                  { title: 'Reel (Video)', value: 'reel' },
                ],
                layout: 'radio',
              },
              validation: (Rule) => Rule.required(),
            },

            { name: 'title', type: 'string' },
            { name: 'description', type: 'text' },
            {
              name: 'dateLabel',
              title: 'Date Label',
              type: 'string',
            },

            {
              name: 'image',
              type: 'image',
              hidden: ({ parent }) => parent?.type !== 'post',
            },

            {
              name: 'video',
              type: 'file',
              options: { accept: 'video/*' },
              hidden: ({ parent }) => parent?.type !== 'reel',
            },
          ],
        },
      ],
    },
  ],
}
