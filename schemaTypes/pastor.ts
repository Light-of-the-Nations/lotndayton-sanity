import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pastor',
  title: 'Pastor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'bannerText',
      title: 'Banner Text',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => [Rule.required()],
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => [Rule.required()],
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Alternative text is required.',
          hidden: ({parent}) => !parent?.asset,
          validation: (Rule) => [Rule.required()],
        },
      ],
    }),

    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => [Rule.required()],
    }),
  ],
})
