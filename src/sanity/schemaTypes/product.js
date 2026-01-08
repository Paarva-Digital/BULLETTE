export default {
  name: "product",
  title: "Product",
  type: "document",

  fields: [
    /* ================= BASIC (matches products.js) ================= */

    {
      name: "name",
      title: "Product Name",
      type: "string",
      validation: Rule => Rule.required(),
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: Rule => Rule.required(),
    },

    {
      name: "category",
      title: "Category",
      type: "string",
      description: "Must match category tabs exactly",
      options: {
        list: [
          { title: "Lighting", value: "lighting" },
          { title: "Switch & Socket", value: "switch-socket" },
          { title: "Wiring Accessories", value: "wiring-accessories" },
          { title: "GI Conduit & Accessories", value: "gi-conduit-accessories" },
          { title: "Connectors", value: "connectors" },
          { title: "Cable Management", value: "cable-management" },
          { title: "Tools", value: "tools" },
        ],
      },
      validation: Rule => Rule.required(),
    },

    {
      name: "tag",
      title: "Filter Tag",
      type: "string",
      description: "Used by FilterBar (e.g. emergency-light, socket, led-bulb)",
    },

    /* ================= MEDIA ================= */

    {
      name: "image",
      title: "Primary Image",
      type: "image",
      description: "Used in product cards",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: Rule => Rule.required(),
        },
      ],
    },

    {
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
    },

    /* ================= CARD CONTENT ================= */

    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
    },

    /* ================= EXTENDED DETAILS (OPTIONAL) ================= */

    {
      name: "overview",
      title: "Product Overview",
      type: "text",
      description: "Shown in extended product details section",
    },

    {
      name: "technical",
      title: "Technical Specifications",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "value", type: "string" },
          ],
        },
      ],
    },

    {
      name: "applications",
      title: "Applications",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "standards",
      title: "Standards & Certifications",
      type: "array",
      of: [{ type: "string" }],
    },

    /* ================= STATUS ================= */

    {
      name: "isActive",
      title: "Visible on Website",
      type: "boolean",
      initialValue: true,
    },
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "image",
    },
  },
};


