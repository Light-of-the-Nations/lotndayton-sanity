import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'visit',
  title: 'Visit',
  type: 'document',
  fields: [
    defineField({
      name: 'mainHeadline',
      title: 'Main Headline',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),

    defineField({
      name: 'scheduleHeadline',
      title: 'Schedule Headline',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'scheduleText',
      title: 'Schedule Text',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => [Rule.required()],
    }),

    defineField({
      name: 'addressHeadline',
      title: 'Address Headline',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'addressText',
      title: 'Address Text',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => [Rule.required()],
    }),

    defineField({
      name: 'contactHeadline',
      title: 'Contact Headline',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'contactText',
      title: 'Contact Text',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => [Rule.required()],
    }),

    defineField({
      name: 'faqHeadline',
      title: 'FAQ Headline',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'faqArray',
      title: 'FAQs',
      type: 'array',
      of: [{type: 'faq', name: 'FAQ'}],

      validation: (Rule) => [Rule.required()],
    }),
  ],
})
