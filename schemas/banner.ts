import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'text_1',
      title: 'Text 1',
      type: 'string',
    }),
    defineField({
      name:'text_2',
      title:"Text 2",
      type:'string'
    }),
    defineField({
        name:'text_3',
        title:"Text 3",
        type:'string'
      }),
      defineField({
        name:'description',
        title:"Descriere",
        type: 'array',
      of:[{type: 'string'}],
      }),
      defineField({
        name: 'image',
        title: 'Imagine',
        type: 'image'
      }),

  ],
})
