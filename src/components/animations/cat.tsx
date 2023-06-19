import Lottie from 'lottie-react'
import cat0 from 'lotties/cat-is-sleeping.json'
import cat1 from 'lotties/cat-playing-animation.json'
import cat2 from 'lotties/cute-cat-works.json'
import cat3 from 'lotties/loading-cat.json'
import cat4 from 'lotties/the-nyan-cat.json'
import { LottieProps } from './types'
import { useState } from 'react'

const cats = [cat0, cat1, cat2, cat3, cat4]

export const Cat = ({ onComplete }: LottieProps) => {
  const [animation] = useState(cats[Math.floor(Math.random() * cats.length)])
  return (
    <Lottie
      animationData={animation}
      loop={false}
      onComplete={() => {
        onComplete?.()
      }}
    />
  )
}
