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

            S.documentTypeListItem('leader').title('Leaders'),

            S.listItem()
              .title('Pastor')
              .id('pastor')
              .child(S.document().schemaType('pastor').documentId('pastor')),

            S.listItem()
              .title('Ministries')
              .id('ministries')
              .child(S.document().schemaType('ministries').documentId('ministries')),

            S.listItem()
              .title('Give')
              .id('give')
              .child(S.document().schemaType('give').documentId('give')),

            S.listItem()
              .title('Visit')
              .id('visit')
              .child(S.document().schemaType('visit').documentId('visit')),

            S.listItem()
              .title('Privacy Policy')
              .id('privacyPolicy')
              .child(S.document().schemaType('privacyPolicy').documentId('privacyPolicy')),
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
