import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'leader',
  title: 'Leader',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
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
      name: 'email',
      title: 'Email',
      type: 'email',
    }),

    defineField({
      name: 'biographyBannerDescription',
      title: 'Biography Banner Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'biographyImage',
      title: 'Biography Image',
      type: 'image',
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
  ],
})
