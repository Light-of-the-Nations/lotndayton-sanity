import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ministries',
  title: 'Ministries',
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
      name: 'individualMinistries',
      title: 'Ministries',
      type: 'array',
      of: [{type: 'ministry', name: 'Ministry'}],

      validation: (Rule) => [Rule.required()],
    }),
  ],
})
