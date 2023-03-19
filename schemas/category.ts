import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'produse',
  title: 'Produse',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titlu',
      type: 'string',
    }),
    defineField({
      name:'desc',
      title:"Descriere",
      type:'string'
    }),
    defineField({
      name:'slug',
      title:'Slug',
      type:'slug'
    }),

  ],
})
