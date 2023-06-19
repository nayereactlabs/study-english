import { createClient } from 'pexels'
import { useState } from 'react'
import { useAsync } from 'react-use'

const pixelesClient = createClient(import.meta.env.VITE_PIXEL_KEY)

export const searchPicture = async (query: string) => {
  if (!query) return null
  const result = await pixelesClient.photos.search({ query })
  if ('photos' in result) {
    return result.photos.map((p) => p.src.medium)
  }
  return null
}

export const usePexels = () => {
  const [query, setQuery] = useState('')

  const search = async () => {
    return await searchPicture(query)
  }

  const searchState = useAsync(search, [query])

  return { setQuery, searchState }
}
