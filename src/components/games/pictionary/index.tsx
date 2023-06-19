import { Cat } from 'components/animations/cat'
import { TriviaCard } from 'components/trivia/card'
import usePictionary from 'hooks/use-pictionary'
import useTriviaScore from 'hooks/use-trivia-score'
import { useEffect, useState } from 'react'
import { useAudioPlayer } from 'react-use-audio-player'

const Pictionary = () => {
  const { score, setScore, incrementScore, decrementScore } = useTriviaScore()
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)
  const [showFailAnimation, setShowFailAnimation] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const { load } = useAudioPlayer()

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

  const onPlay = () => {
    if (question?.sound) {
      load(question.sound, {
        autoplay: true,
        onend: () => {}
      })
    }
  }

  const onLoad = () => {
    onPlay()
    setLoading(false)
  }

  const playAgain = () => {
    window.location.reload()
  }

  const showLoader = arePictureLoading || isLoading
  const showTrivia = question && hasNext && !showLoader

  useEffect(() => {
    onPlay()
  }, [question?.sound])

  console.log('question', question)

  // bg-blue-200
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-full">
        {((!showLoader && !hasNext) || showTrivia) && (
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
              <button onClick={playAgain} className="btn btn-primary">
                Jugar de nuevo
              </button>
            )}
          </div>
        )}
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
      </div>
    </>
  )
}

export default Pictionary
