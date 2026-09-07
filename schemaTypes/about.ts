import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'mainHeadline',
      title: 'Main Headline',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'mainText',
      title: 'Main Text',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => [Rule.required()],
    }),

    defineField({
      name: 'leadersHeadline',
      title: 'Leaders Headline',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),

    defineField({
      name: 'leaders',
      title: 'Leaders',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'leader'}]}],

      validation: (Rule) => [Rule.required()],
    }),
  ],
})
