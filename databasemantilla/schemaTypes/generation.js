// generation.js

import { defineType } from 'sanity'

export default defineType({
  name: 'generation',
  title: 'Generation',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ]
})
