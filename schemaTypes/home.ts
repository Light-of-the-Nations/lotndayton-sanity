import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'bannerHeadline',
      title: 'Banner Headline',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'bannerHeadlineBreak',
      title: 'Banner Headline Bottom Gold Line',
      type: 'string',
    }),
    defineField({
      name: 'bannerScriptureReading',
      title: 'Banner Scripture Reading',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'bannerScriptureCitation',
      title: ' Banner Scripture Citation',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'bannerText',
      title: 'Banner Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'eventsHeadline',
      title: 'Events Headline',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
  ],
})
