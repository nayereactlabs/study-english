import { TriviaCard } from 'components/trivia/card'
import { usePexels } from 'hooks/use-pexels'
import { toast } from 'react-toastify'

import { useEffect, useState } from 'react'
import { questions } from './generator'

export const FindWord = () => {
  const [score, setScore] = useState(100)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const { setQuery, searchState } = usePexels()

  useEffect(() => {
    setQuery(questions[currentQuestionIndex].word)
    setCurrentImageIndex(0)
  }, [currentQuestionIndex])

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      alert(`Juego terminado: ${score}`)
    }
  }

  const handleOptionClick = (option: string) => {
    if (option === questions[currentQuestionIndex].word) {
      setScore(score + 2)
      toast(
        questions[currentQuestionIndex].correctAnswerTranslation.toUpperCase()
      )
      handleNext()
    } else {
      setScore(score - 1)
      toast.info('Trata de nuevo!')
      // Update image index when answer is incorrect
      setCurrentImageIndex(
        (currentImageIndex + 1) % (searchState.value?.length || 0)
      )
    }
  }

  return (
    <>
      {searchState.value && (
        <TriviaCard
          src={
            searchState.value[
              Math.floor(Math.random() * searchState.value.length)
            ]
          } // Use current image index
          label={questions[currentQuestionIndex].label}
          options={questions[currentQuestionIndex].options}
          correctAnswer={questions[currentQuestionIndex].word}
          score={score}
          setScore={setScore}
          onNext={handleNext}
          handleOptionClick={handleOptionClick}
        />
      )}
    </>
  )
}

export default FindWord
