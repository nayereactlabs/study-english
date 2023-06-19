import { useLottie } from 'lottie-react'
import animationData from 'lotties/123032-timer.json'
import { LottieProps } from './types'
import { useEffectOnce } from 'react-use'

const style = {
  height: '6rem'
}

export const Timer = ({ onComplete }: LottieProps) => {
  const options = {
    animationData,
    loop: true,
    autoplay: true,
    onLoopComplete: () => {
      onComplete?.()
    }
  }

  const { View, setSpeed } = useLottie(options, style)

  useEffectOnce(() => {
    setSpeed(0.1)
  })

  return View
}

export default Timer
