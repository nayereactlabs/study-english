import { Cat } from 'components/animations/cat'
import { Timer } from 'components/animations/timer'
import { TriviaCard } from 'components/trivia/card'
import usePictionary from 'hooks/use-pictionary'
import useTriviaScore from 'hooks/use-trivia-score'
import { useState } from 'react'

type PictionaryProps = {
  words: string[]
}

const Pictionary = ({ words }: PictionaryProps) => {
  const { score, setScore, incrementScore, decrementScore } = useTriviaScore(0)
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)
  const [showFailAnimation, setShowFailAnimation] = useState(false)

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
    words,
    onSuccess,
    onFail
  })

  const playAgain = () => {
    window.location.reload()
  }

  const showLoader = arePictureLoading || words.length === 0
  const showTrivia = question && hasNext && !showLoader

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-full">
        <>
          {((!showLoader && !hasNext) || showTrivia) && (
            <div
              className="flex flex-row items-center justify-center w-full"
              data-id="user-stats"
            >
              <div
                className={`flex flex-row items-center justify-center text-center shadow stats ${
                  !hasNext ? 'p-6' : ''
                }`}
              >
                <div className="stat">
                  <div className="stat-title">Puntos</div>
                  <div className="stat-value">{score}</div>
                </div>
                {hasNext && <Timer onComplete={skipQuestion} />}
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
            </div>
          )}
        </>
        {showLoader && (
          <>
            <Cat infinite />
            Creando preguntas ❤️ ...
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
