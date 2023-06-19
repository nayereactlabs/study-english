import { shuffleArray } from 'utils'

const words = [
  'dog',
  'cat',
  'elephant',
  'tiger',
  'lion',
  'giraffe',
  'zebra',
  'bear',
  'monkey',
  'hippopotamus',
  'rhinoceros',
  'kangaroo',
  'penguin',
  'crocodile',
  'snake',
  'wolf',
  'fox',
  'deer',
  'rabbit',
  'owl',
  'beach',
  'mountain',
  'sightseeing',
  'adventure',
  'culture',
  'explore',
  'vacation',
  'camera',
  'passport',
  'hiking',
  'scenic',
  'tourism'
]

const generateQuestions = (words: string[]) => {
  return words.map((word) => {
    const incorrectOptions = words
      .filter((option) => option !== word)
      .slice(0, 3)

    const options = shuffleArray([word, ...incorrectOptions])

    return {
      word,
      label: '',
      options: options,
      answer: word,
      correctAnswerTranslation: '',
      sound: ''
    }
  })
}

export type PictionaryQuestionInput = {
  word: string
  label: string
  options: string[]
  answer: string
  correctAnswerTranslation: string
  sound: string
}

export type PictionaryQuestion = {
  word: string
  label: string
  options: string[]
  pickedOptions: string[]
  urls: string[]
  url: string
  answer: string
  correctAnswerTranslation: string
  sound: string
}

export const getPictionaryQuestions = (words: string[]) =>
  generateQuestions(shuffleArray([...words]))
