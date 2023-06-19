const words = [
  'front',
  'desk',
  'cot',
  'crib',
  'express',
  'checkout',
  'kiosk',
  'fitness',
  'centre',
  'hairdryer',
  'indoor',
  'swimming',
  'pool',
  'in-room',
  'safe',
  'iron',
  'laundry',
  'service',
  'walk-in',
  'shower',
  'blanket',
  'duvet',
  'hand',
  'lotion',
  'pillow',
  'shampoo',
  'sheet',
  'shower',
  'gel',
  'soap',
  'toiletries',
  'bedclothes'
]

const generateQuestions = (words: string[]) => {
  return words.map((word) => {
    const incorrectOptions = words
      .filter((option) => option !== word)
      .sort(() => 1 - Math.random())
      .slice(0, 3)

    const options = [word, ...incorrectOptions].sort(() => 1 - Math.random())

    return {
      word,
      label: '',
      options: options,
      answer: word,
      correctAnswerTranslation: ''
    }
  })
}

export type PictionaryQuestionInput = {
  word: string
  label: string
  options: string[]
  answer: string
  correctAnswerTranslation: string
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
}

export const pictionaryQuestions = generateQuestions(words)
