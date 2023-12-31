import { Cat } from 'components/animations/cat'
import { Timer } from 'components/animations/timer'
import { TriviaCard } from 'components/trivia/card'
import usePictionary from 'hooks/use-pictionary'
import useTimer from 'hooks/use-timer'
import useTriviaScore from 'hooks/use-trivia-score'
import { useEffect, useState } from 'react'
import { getColor, t } from 'utils/css'

type PictionaryProps = {
  words: string[]
}

const Pictionary = ({ words }: PictionaryProps) => {
  const { score, setScore, incrementScore, decrementScore } = useTriviaScore(0)
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)
  const [showFailAnimation, setShowFailAnimation] = useState(false)
  const { minutes, seconds, timeOver } = useTimer(120)
  const [showAnswers, setShowAnswers] = useState(false)

  const onSuccess = () => {
    setShowSuccessAnimation(true)
    incrementScore(2)
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
    questions,
    hasNext,
    isLoading: arePictureLoading,
    goNext,
    goEnd
  } = usePictionary({
    words,
    onSuccess,
    onFail
  })

  const playAgain = () => {
    window.location.reload()
  }

  const onShowAnswers = () => {
    setShowAnswers((prev) => !prev)
  }

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      setTimeout(() => {
        goEnd()
      }, 1000)
    }
  }, [minutes, seconds, goEnd])

  const showLoader = arePictureLoading || words.length === 0
  const showTrivia = question && hasNext && !showLoader

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-full">
        {showLoader && (
          <>
            <Cat infinite />
            Creando preguntas ❤️ ...
          </>
        )}
        {
          <div className={`${!hasNext ? '' : `p-4 pt-8`}`}>
            {((!showLoader && !hasNext) || showTrivia) && (
              <div
                className="flex flex-row items-center justify-center w-full"
                data-id="user-stats"
              >
                <div
                  className={`flex flex-row items-center justify-center text-center shadow stats ${
                    !hasNext ? 'p-6' : 'm-6'
                  }`}
                >
                  {!showAnswers && (
                    <div className="stat">
                      <div className="stat-title">
                        Puntos
                        {/* {`${(currentQuestionId ?? 0) + 1}/${questionsCount}`} */}
                      </div>
                      <div className="stat-value">{score}</div>
                      <div className="stat-desc ">
                        {!timeOver && (
                          <span className="font-mono text-2xl countdown">
                            <span
                              style={{ ['--value' as any]: minutes }}
                            ></span>
                            :
                            <span
                              style={{ ['--value' as any]: seconds }}
                            ></span>
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  {hasNext && <Timer />}
                  {!hasNext && (
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="p-6">
                        <Cat infinite={true} />
                      </div>
                      <button onClick={playAgain} className="btn btn-primary">
                        Jugar de nuevo
                      </button>
                      <button
                        onClick={onShowAnswers}
                        className="btn btn-secondary"
                      >
                        Ver respuestas
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
            {showAnswers && (
              <div className="justify-center pt-4 card-actions">
                {questions.map((question, index) => {
                  const color = getColor(index)
                  return (
                    <button
                      key={`${question.id}-${index}-${color}`}
                      className={t`btn bg-${color} btn-wide normal-case`}
                    >
                      {question.content.label}
                    </button>
                  )
                })}
              </div>
            )}
            {showTrivia && (
              <TriviaCard
                onSuccess={goNextQuestion}
                sound={question.sound}
                src={question.url}
                label={question.label}
                options={question.options}
                pickedOptions={question.pickedOptions}
                correctAnswer={question.word}
                score={score}
                showSuccessAnimation={showSuccessAnimation}
                showFailAnimation={showFailAnimation}
                setScore={setScore}
                handleOptionClick={handleOptionClick}
              />
            )}
          </div>
        }
      </div>
    </>
  )
}

export default Pictionary
