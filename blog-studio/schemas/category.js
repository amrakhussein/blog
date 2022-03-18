export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      of: [{type: 'reference', to: {type: 'post'}}],

    },
    
    // {
    //   name: 'description',
    //   title: 'Description',
    //   type: 'text',
    // },
 
  ],
}
