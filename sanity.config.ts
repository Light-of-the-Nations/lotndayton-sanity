import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

const singletonTypes = ['home', 'privacyPolicy']

export default defineConfig({
  name: 'default',
  title: 'lotndayton-sanity',

  projectId: 'r94v9owx',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title('Home').id('home').child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType('home').documentId('home'),
            ),

            S.listItem()
              .title('About')
              .id('about')
              .child(S.document().schemaType('about').documentId('about')),

            S.listItem()
              .title('Ministries')
              .id('ministries')
              .child(S.document().schemaType('ministries').documentId('ministries')),

            S.listItem()
              .title('Give')
              .id('give')
              .child(S.document().schemaType('give').documentId('give')),

            // // Regular document types
            S.documentTypeListItem('leader').title('Leaders'),
            // S.documentTypeListItem('book').title('Book'),

            // S.listItem()
            //   .title('Books Page')
            //   .id('bookPage')
            //   .child(
            //     S.document().schemaType('bookPage').documentId('bookPage'),
            //   ),

            // S.documentTypeListItem('lore').title('Lore'),
            // S.listItem()
            //   .title('Lore Page')
            //   .id('lorePage')
            //   .child(
            //     S.document().schemaType('lorePage').documentId('lorePage'),
            //   ),

            // S.documentTypeListItem('news').title('News'),
            // S.documentTypeListItem('event').title('Event'),

            // S.listItem()
            //   .title('News and Events Page')
            //   .id('newsEventPage')
            //   .child(
            //     S.document()
            //       .schemaType('newsEventPage')
            //       .documentId('newsEventPage'),
            //   ),

            // S.listItem()
            //   .title('About')
            //   .id('about')
            //   .child(S.document().schemaType('about').documentId('about')),
            // S.listItem()
            //   .title('Contact')
            //   .id('contact')
            //   .child(S.document().schemaType('contact').documentId('contact')),
            // S.listItem()
            //   .title('Privacy Policy')
            //   .id('privacyPolicy')
            //   .child(
            //     S.document()
            //       .schemaType('privacyPolicy')
            //       .documentId('privacyPolicy'),
            //   ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.includes(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.includes(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
