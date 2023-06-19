import { useState, useCallback, useMemo } from 'react'

export type Question<T> = {
  id: number
  content: T
}

type UseTriviaHook<T> = {
  questions: Question<T>[]
  question: Question<T> | null
  questionsCount: number
  prev: () => void
  next: () => void
  hasNext: boolean
  hasPrev: boolean
  addNew: (content: T) => void
  setQuestions: (questions: Question<T>[]) => void
  changeQuestion: (questionId: number, newContent: T) => void
  goEnd: () => void
}

function useTrivia<T>(initialQuestions: Question<T>[] = []): UseTriviaHook<T> {
  const [questions, setQuestions] = useState<Question<T>[]>(initialQuestions)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const question = questions[currentQuestionIndex] || null

  const hasNext = useMemo(() => {
    return currentQuestionIndex < questions.length - 1
  }, [currentQuestionIndex, questions.length])

  const hasPrev = useMemo(() => {
    return currentQuestionIndex > 0
  }, [currentQuestionIndex])

  const addNew = useCallback(
    (content: T) => {
      setQuestions((prevQuestions) => [
        ...prevQuestions,
        { id: prevQuestions.length, content: content }
      ])
    },
    [setQuestions]
  )

  const changeQuestion = useCallback((questionId: number, newContent: T) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) =>
        question.id === questionId
          ? { ...question, content: newContent }
          : question
      )
    })
  }, [])

  const next = useCallback(() => {
    if (hasNext) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
    }
  }, [hasNext])

  const prev = useCallback(() => {
    if (hasPrev) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1)
    }
  }, [hasPrev])

  const goEnd = useCallback(() => {
    setCurrentQuestionIndex(questions.length - 1)
  }, [questions.length])

  return {
    setQuestions,
    changeQuestion,
    questions,
    questionsCount: questions.length,
    question,
    prev,
    next,
    hasNext,
    hasPrev,
    addNew,
    goEnd
  }
}

export default useTrivia
