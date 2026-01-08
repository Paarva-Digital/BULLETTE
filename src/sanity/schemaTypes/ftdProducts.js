export default {
  name: "ftdProductsSection",
  title: "Featured Products Section",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Section Heading",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "products",
      title: "Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", validation: Rule => Rule.required() },
            { name: "subtitle", type: "string" },
            { name: "image", type: "image", options: { hotspot: true } },
            {
              name: "features",
              type: "array",
              of: [{ type: "string" }]
            },
            {
  name: "product",
  title: "Product",
  type: "reference",
  to: [{ type: "product" }],
  options: {
    disableNew: true
  }
}

          ]
        }
      ]
    }
  ]
};
