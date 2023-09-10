import { createClient } from 'generated'

const client = createClient({
  url: import.meta.env.VITE_HASURA_API || '',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': import.meta.env.VITE_HASURA_ADMIN_SECRET || ''
  }
})

type PictinaryWord = {
  word: string
  src: {
    url: string
  }[]
}

export const insertWord = (word: PictinaryWord) => {
  client
    .mutation({
      insert_pictionary_one: {
        __args: {
          object: {
            ...word,
            metadata: {}
          }
        },
        word: true,
        metadata: true
      }
    })
    .then(console.log)
}
