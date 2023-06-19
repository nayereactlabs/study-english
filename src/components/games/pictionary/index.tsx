import { Cat } from 'components/animations/cat'
import { TriviaCard } from 'components/trivia/card'
import usePictionary from 'hooks/use-pictionary'
import useTriviaScore from 'hooks/use-trivia-score'
import { useState } from 'react'

const Pictionary = () => {
  const { score, setScore, incrementScore, decrementScore } = useTriviaScore()
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)
  const [showFailAnimation, setShowFailAnimation] = useState(false)
  const [isLoading, setLoading] = useState(true)

  const onSuccess = () => {
    setShowSuccessAnimation(true)
    incrementScore()
  }
  const onFail = () => {
    decrementScore()
  }

  const goNextQuestion = () => {
    setShowSuccessAnimation(false)
    setShowFailAnimation(false)
    goNext()
  }

  const stayInQuestion = () => {
    setShowSuccessAnimation(false)
    setShowFailAnimation(false)
  }

  const {
    handleOptionClick,
    question,
    hasNext,
    isLoading: arePictureLoading,
    goNext
  } = usePictionary({
    onSuccess,
    onFail
  })

  const onLoad = () => setLoading(false)

  const showLoader = arePictureLoading || isLoading
  const showTrivia = question && hasNext && !showLoader

  // bg-blue-200
  return (
    <div className="flex items-center justify-center w-full min-h-full bg-white">
      {showLoader && <Cat onComplete={onLoad} />}
      {showTrivia && (
        <div className="p-4">
          <TriviaCard
            onSuccess={goNextQuestion}
            src={question.url}
            label={question.word}
            options={question.options}
            pickedOptions={question.pickedOptions}
            correctAnswer={question.word}
            score={score}
            showSuccessAnimation={showSuccessAnimation}
            showFailAnimation={showFailAnimation}
            setScore={setScore}
            handleOptionClick={handleOptionClick}
          />
        </div>
      )}
      {!showLoader && !hasNext && <>FIN: {score}</>}
    </div>
  )
}

export default Pictionary
