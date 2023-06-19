import { Cat } from 'components/animations/cat'
import { Timer } from 'components/animations/timer'
import { TriviaCard } from 'components/trivia/card'
import usePictionary from 'hooks/use-pictionary'
import useTriviaScore from 'hooks/use-trivia-score'
import { useState } from 'react'

const Pictionary = () => {
  const { score, setScore, incrementScore, decrementScore } = useTriviaScore(0)
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)
  const [showFailAnimation, setShowFailAnimation] = useState(false)
  const [isLoading, setLoading] = useState(true)

  const onSuccess = () => {
    setShowSuccessAnimation(true)
    incrementScore(2)
  }
  const onFail = () => {
    decrementScore()
  }

  const skipQuestion = () => {
    setShowSuccessAnimation(false)
    setShowFailAnimation(false)
    decrementScore()
    goNext()
  }

  const goNextQuestion = () => {
    setShowSuccessAnimation(false)
    setShowFailAnimation(false)
    goNext()
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

  const onLoad = () => {
    setLoading(false)
  }

  const playAgain = () => {
    window.location.reload()
  }

  const showLoader = arePictureLoading || isLoading
  const showTrivia = question && hasNext && !showLoader

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-full">
        {((!showLoader && !hasNext) || showTrivia) && (
          <div className="flex">
            <div
              className={`flex flex-col text-center shadow stats ${
                !hasNext ? 'p-6' : ''
              }`}
            >
              <div className="stat">
                <div className="stat-title">Puntos</div>
                <div className="stat-value">{score}</div>
              </div>
              {!hasNext && (
                <div className="flex flex-col items-center justify-center">
                  <div className="p-6">
                    <Cat infinite={true} />
                  </div>

                  <button onClick={playAgain} className="btn btn-primary">
                    Jugar de nuevo
                  </button>
                </div>
              )}
            </div>
            {hasNext && <Timer onComplete={skipQuestion} />}
          </div>
        )}
        {showLoader && (
          <>
            <Cat onComplete={onLoad} />
          </>
        )}
        {showTrivia && (
          <div className="p-4">
            <TriviaCard
              onSuccess={goNextQuestion}
              sound={question.sound}
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
      </div>
    </>
  )
}

export default Pictionary
