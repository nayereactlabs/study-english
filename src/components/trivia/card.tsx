import { t } from 'utils/css'
import { getColor } from 'utils/words'

type TriviaCardProps = {
  src: string
  options: string[]
  correctAnswer: string
  label?: string
  onNext?: () => void
  score: number
  setScore: (score: number) => void
  handleOptionClick: (option: string) => void
}

export const TriviaCard = ({
  src,
  label,
  options,
  score,
  handleOptionClick,
  correctAnswer
}: TriviaCardProps) => {
  console.log(src)
  console.log({ src, label, options, score, correctAnswer })
  return (
    <div className="text-center shadow-xl card w-96 bg-base-100">
      <div className="card-body">
        <p>Naye Adivina la palabra!</p>
        <p>Score: {score}</p>
      </div>
      <figure>
        <img src={src} alt={label || 'picture'} />
      </figure>
      <div className="justify-center py-4 card-actions">
        {options.map((option, index) => {
          const color = getColor(index)
          return (
            <button
              onClick={() => handleOptionClick(option)}
              key={`${option}-${index}-${color}`}
              className={t`btn bg-${color}`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}
