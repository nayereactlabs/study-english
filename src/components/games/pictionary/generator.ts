import { PictionaryQuestion, pictionaryQuestions } from 'db/pictionary'
import { searchPicture } from 'hooks/use-pexels'
import { assertFulfilled } from 'utils'

export const getQuestions = async () => {
  const questions = (
    await Promise.allSettled(
      pictionaryQuestions.map(async (question) => {
        const urls = await searchPicture(question.word)
        return { ...question, urls: urls, url: urls?.[0], pickedOptions: [] }
      })
    )
  )
    .filter(assertFulfilled)
    .map((item) => item.value) as PictionaryQuestion[]
  return questions
}
