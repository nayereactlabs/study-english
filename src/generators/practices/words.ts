import { searchPicture } from 'hooks/use-pexels'

const words: string[] = [
  'mango',
  'lettuce',
  'banana',
  'apple',
  'orange',
  'pineapple',
  'potato',
  'carrot',
  'onion',aaaaa
  'cabbage',
  'egg',
  'cucumber',
  'milk',
  'cheese',
  'dessert',
  'yoghurt',
  'cream',
  'butter',
  'beef',
  'chicken',
  'prawn',
  'duck',
  'rabbit',
  'lamb',
  'bread',
  'pasta',
  'noodles',
  'rice',
  'breakfast cereal',
  'garlic',
  'cod',
  'salmon',
  'tuna',
  'carp',
  'mushroom',
  'trout'
]

export type GeneratedImage = {
  src: string
  id: string
  alt?: string
  checked: boolean
}

export const generatePictures = async () => {
  const word = words[0]
  const result = await searchPicture(words[0])
  const images = (result?.map((p, index) => ({
    id: `${index}`,
    src: p,
    checked: true
  })) || []) as GeneratedImage[]
  return {
    images,
    word
  }
}
