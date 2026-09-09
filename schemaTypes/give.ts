import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'give',
  title: 'Give',
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
      name: 'leftSubheadline',
      title: 'Left Subheadline',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'leftText',
      title: 'Left Text',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => [Rule.required()],
    }),

    defineField({
      name: 'rightSubheadline',
      title: 'Right Subheadline',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'rightText',
      title: 'Right Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'paypalButtonText',
      title: 'PayPal Button Text',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
  ],
})
