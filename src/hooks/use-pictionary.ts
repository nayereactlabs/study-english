import { useEffect, useState } from 'react'
import useTrivia from './use-trivia'
import { PictionaryQuestion } from 'db/pictionary'
import { getQuestions } from 'components/games/pictionary/generator'

type UsePictionaryHook = {
  onSuccess: () => void
  onFail: () => void
  words: string[]
}

const usePictionary = ({ onSuccess, onFail, words }: UsePictionaryHook) => {
  const {
    setQuestions,
    changeQuestion,
    question,
    next: goNext,
    hasNext
  } = useTrivia<PictionaryQuestion>()

  const [isLoading, setIsLoading] = useState(true)
  const { content: currentQuestion, id: currentQuestionId } = question || {}

  useEffect(() => {
    if (!words || words.length < 1) return
    // just for demo
    let _words = words.slice(0, 4)
    if (!import.meta.env.VITE_OFFLINE) {
      _words = words
    }
    getQuestions(_words)
      .then((newQuestions) => {
        setQuestions(
          newQuestions.map((question, index) => ({
            content: question,
            id: index
          }))
        )
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [words])

  const handleOptionClick = (option: string) => {
    if (currentQuestion?.answer === option) {
      onSuccess()
    } else {
      if (currentQuestionId !== undefined && currentQuestion !== undefined) {
        changeQuestion(currentQuestionId, {
          ...currentQuestion,
          pickedOptions: [...currentQuestion.pickedOptions, option]
        })
      }
      onFail()
    }
  }

  return {
    goNext,
    handleOptionClick,
    question: currentQuestion,
    hasNext,
    isLoading
  }
}

export default usePictionary
