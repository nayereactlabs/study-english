import { Correct } from 'components/animations/correct'
import { Wrong } from 'components/animations/wrong'
import { getColor, t } from 'utils/css'

type TriviaCardProps = {
  src: string
  options: string[]
  pickedOptions: string[]
  correctAnswer: string
  label?: string
  message?: string
  score: number
  setScore: (score: number) => void
  handleOptionClick: (option: string) => void
  showSuccessAnimation?: boolean
  showFailAnimation?: boolean
  onSuccess?: () => void
  onFail?: () => void
}

export const TriviaCard = ({
  src,
  label,
  options,
  pickedOptions,
  showSuccessAnimation,
  showFailAnimation,
  handleOptionClick,
  onSuccess,
  onFail
}: TriviaCardProps) => {
  const showFeedback = showSuccessAnimation || showFailAnimation

  return (
    <div className="shadow-xl card lg:card-side bg-base-100 min-h-[80vh] md:min-h-[60vh] flex flex-col">
      <div className="relative flex-grow w-full h-48 overflow-hidden sm:h-60 md:h-80 lg:h-96">
        <figure className="flex items-center justify-center max-w-lg">
          <img
            src={src}
            alt={label || 'Pictionary'}
            className={`absolute object-contain w-auto h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
          />
        </figure>
      </div>

      <div className="flex flex-col items-center flex-grow h-64 overflow-y-auto card-body sm:h-72 md:h-80 lg:h-96">
        <h2 className="card-title">Quién soy?</h2>
        <p></p>
        {showSuccessAnimation && <Correct onComplete={onSuccess} />}
        {onFail && showFailAnimation && <Wrong onComplete={onFail} />}
        <div className="justify-center pt-4 card-actions">
          {options.map((option, index) => {
            const color = getColor(index)
            return (
              <button
                onClick={() => handleOptionClick(option)}
                key={`${option}-${index}-${color}`}
                className={t`btn bg-${color} btn-wide ${
                  showFeedback ? 'invisible' : ''
                } ${pickedOptions.includes(option) ? 'btn-disabled' : ''}`}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}