import { createClient } from 'pexels'
import { useState } from 'react'
import { useAsync } from 'react-use'

export const usePexels = () => {
  const [client] = useState(createClient(import.meta.env.VITE_PIXEL_KEY))
  const [query, setQuery] = useState('')

  const searchState = useAsync(async () => {
    if (!query) return null
    const result = await client.photos.search({ query })
    console.log({ result, query })
    if ('photos' in result) {
      return result.photos.map((p) => p.src.medium)
    }
    return null
  }, [query])

  return { setQuery, searchState }
}

// result.photos[Math.floor(Math.random() * result.photos.length)].src.medium
