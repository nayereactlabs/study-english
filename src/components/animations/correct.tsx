import Lottie from 'lottie-react'
import lottie from 'lotties/correct.json'
import { LottieProps } from './types'

export const Correct = ({ onComplete }: LottieProps) => (
  <Lottie
    className="w-24"
    animationData={lottie}
    loop={false}
    onComplete={() => {
      onComplete?.()
    }}
  />
)
