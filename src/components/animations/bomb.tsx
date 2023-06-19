import Lottie from 'lottie-react'
import lottie from 'lotties/bomb.json'
import { LottieProps } from './types'

export const Bomb = ({ onComplete }: LottieProps) => (
  <Lottie
    className="w-24"
    animationData={lottie}
    loop={true}
    onLoopComplete={() => {
      onComplete?.()
    }}
  />
)
