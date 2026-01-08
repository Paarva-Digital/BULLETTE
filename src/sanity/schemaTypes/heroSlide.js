export default {
  name: 'heroSlide',
  title: 'Hero Slide',
  type: 'object',

  fields: [
    {
      name: 'variant',
      title: 'Slide Style',
      type: 'string',
      options: {
        list: [
          { title: 'Light (black text)', value: 'light' },
          { title: 'Dark (white text)', value: 'dark' },
        ],
        layout: 'radio',
      },
      initialValue: 'light',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'highlight',
      title: 'Highlighted Word',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
    },
  ],

  /* 👇 THIS IS THE IMPORTANT PART */
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
      media: 'backgroundImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled Hero Slide',
        subtitle: subtitle ? `Hero Slide · ${subtitle}` : 'Hero Slide',
        media,
      }
    },
  },
}
