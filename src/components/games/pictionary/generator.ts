import { PictionaryQuestion, pictionaryQuestions } from 'db/pictionary'
import { searchPicture } from 'hooks/use-pexels'
import { searchSound } from 'hooks/use-sounds'
import { assertFulfilled } from 'utils'

export const getQuestions = async () => {
  const questions = (
    await Promise.allSettled(
      pictionaryQuestions.map(async (question) => {
        const urls = await searchPicture(question.word)
        const sound = await searchSound(question.word)
        return {
          ...question,
          urls: urls,
          url: urls?.[0] || '',
          pickedOptions: [],
          sound
        }
      })
    )
  )
    .filter(assertFulfilled)
    .filter((item) => item.value.url && item.value.sound)
    .map((item) => item.value) as PictionaryQuestion[]
  return questions
}
