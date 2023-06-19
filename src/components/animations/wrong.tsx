import Lottie from 'lottie-react'
import lottie from 'lotties/wrong.json'
import { LottieProps } from './types'

export const Wrong = ({ onComplete }: LottieProps) => (
  <Lottie
    className="w-24"
    animationData={lottie}
    loop={false}
    onComplete={() => {
      onComplete?.()
    }}
  />
)
