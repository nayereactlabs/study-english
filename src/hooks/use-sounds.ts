import { useState } from 'react'
import { useAsync } from 'react-use'

export interface SoundAPI {
  word: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  license: License
  sourceUrls: string[]
}

export interface License {
  name: string
  url: string
}

export interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonyms: string[]
}

export interface Definition {
  definition: string
  synonyms: any[]
  antonyms: any[]
  example?: string
}

export interface Phonetic {
  audio: string
  sourceUrl?: string
  license?: License
  text?: string
}

function getUSSound(words: SoundAPI[]): string | undefined {
  for (const word of words) {
    for (const phonetic of word.phonetics) {
      if (phonetic.audio.toLowerCase().includes('-us.')) {
        return phonetic.audio
      }
    }
  }
  return undefined
}

export const searchSound = async (query: string) => {
  if (!query) return null
  let audio = ''
  try {
    const result = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
    )
    const apiResult = (await result.json()) as SoundAPI[]

    if (apiResult.length > 0) {
      audio = getUSSound(apiResult) || ''
    }
    return audio
  } catch (e) {
    console.log(e)
    return audio
  }
}

export const useSounds = () => {
  const [query, setQuery] = useState('')

  const search = async () => {
    return await searchSound(query)
  }

  const soundState = useAsync(search, [query])

  return { setQuery, soundState }
}
