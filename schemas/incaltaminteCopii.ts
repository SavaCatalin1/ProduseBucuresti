import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'incaltaminte_copii',
  title: 'Incaltaminte copii',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titlu',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Imagine',
      type: 'array',
      of:[{type: 'image'}],
    }),
    defineField({
      name: 'categories',
      title: 'Categorii',
      type: 'array',
      of: [{type: 'reference', to: {type: 'produse'}}],
    }),
    
  ],
})
