export default {
  name: 'homePage',
  title: 'Homepage',
  type: 'document',

  fields: [
    /* ================= HERO ================= */
    {
      name: 'heroSlides',
      title: 'Hero Slides',
      description: 'Main homepage hero carousel',
      type: 'array',
      of: [{ type: 'heroSlide' }],
      validation: (Rule) => Rule.min(1),
    },

    /* ================= PRODUCT CATEGORIES ================= */
    {
      name: 'productCategories',
      title: 'Product Categories',
      description: 'Homepage category slider items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'productCategory',
          title: 'Category',
          fields: [
            {
              name: 'name',
              title: 'Category Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: { source: 'name' },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Category Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'name',
              media: 'image',
            },
          },
        },
      ],
    },

    /* ================= FEATURED PRODUCTS ================= */
    {
      name: 'ftdProducts',
      title: 'Featured Products Section',
      description: 'Highlighted products displayed on the homepage',
      type: 'ftdProductsSection',
    },
 
    /* ================= BLOG SECTION ================= */

        {
  name: 'blogSection',
  title: 'Homepage Blog Section',
  type: 'blogSection',
   },

    /* ================= SOCIAL FEED ================= */
    {
      name: 'socialFeed',
      title: 'Social Feed',
      type: 'socialFeed', // 👈 THIS references your object schema
    },

  ],

  /* ================= DOCUMENT PREVIEW ================= */
  preview: {
    select: {
      heroCount: 'heroSlides.length',
      categoryCount: 'productCategories.length',
      hasFeatured: 'ftdProducts',
    },
    prepare({ heroCount = 0, categoryCount = 0, hasFeatured }) {
      return {
        title: 'Homepage Document',
        subtitle: [
          heroCount
            ? `${heroCount} Hero Slide${heroCount > 1 ? 's' : ''}`
            : null,
          categoryCount
            ? `${categoryCount} Product Categor${
                categoryCount > 1 ? 'ies' : 'y'
              }`
            : null,
          hasFeatured ? 'Featured Products configured' : null,
        ]
          .filter(Boolean)
          .join(' • '),
      }
    },
  },
}
