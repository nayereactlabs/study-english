import { PictionaryQuestion, getPictionaryQuestions } from 'db/pictionary'
import { searchPicture } from 'hooks/use-pexels'
import { searchSound } from 'hooks/use-sounds'
import { assertFulfilled } from 'utils'

export const getQuestions = async (words: string[]) => {
  const cache: any = {}
  const questions = (
    await Promise.allSettled(
      getPictionaryQuestions(words).map(async (question) => {
        const urls = await searchPicture(question.word)
        const { audio, text } = await searchSound(question.word)
        return {
          ...question,
          urls: urls,
          url: urls?.[0] || '',
          pickedOptions: [],
          sound: audio,
          phonetic: text,
          label: `${question.word}${text ? ` (${text})` : ''}`
        }
      })
    )
  )
    .filter(assertFulfilled)
    .filter((item) => item.value.url)
    .map((item) => item.value) as PictionaryQuestion[]
  console.log({ questions: questions.length })
  return questions
}
