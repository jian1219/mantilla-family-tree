// person.js

import { defineType } from 'sanity'

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'age',
      title: 'Age',
      type: 'number',
      validation: Rule => Rule.required().positive().integer()
    },
    {
      name: 'birthday',
      title: 'Birthday',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'profilePic',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    },
    {
      name: 'parents',
      title: 'Parents',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      options: {
        layout: 'tags' // Optionally, use a different layout for selecting parents
      }
    },
    {
      name: 'siblings',
      title: 'Siblings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      options: {
        layout: 'tags' // Optionally, use a different layout for selecting siblings
      }
    },
    {
      name: 'children',
      title: 'Children',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }]
    },
    {
      name: 'generation',
      title: 'Generation',
      type: 'number'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description about the person.'
    }
  ]
})
