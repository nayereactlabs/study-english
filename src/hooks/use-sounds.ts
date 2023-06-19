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

function getUSSound(words: SoundAPI[]): Phonetic | undefined {
  for (const word of words) {
    for (const phonetic of word.phonetics) {
      if (phonetic.audio.toLowerCase().includes('-us.')) {
        return {
          audio: phonetic.audio,
          text: phonetic.text
        }
      }
    }
  }
  return undefined
}

export const searchSound = async (query: string) => {
  let phonetic: Phonetic = {
    audio: '',
    text: ''
  }
  if (!query) return phonetic
  try {
    const result = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
    )
    const apiResult = (await result.json()) as SoundAPI[]

    if (apiResult.length > 0) {
      phonetic = getUSSound(apiResult) || phonetic
    }
    return phonetic
  } catch (e) {
    console.log(e)
    return phonetic
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
