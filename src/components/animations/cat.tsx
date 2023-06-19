import Lottie from 'lottie-react'
import cat0 from 'lotties/cat-is-sleeping.json'
import cat1 from 'lotties/cat-playing-animation.json'
import cat2 from 'lotties/cute-cat-works.json'
import cat3 from 'lotties/loading-cat.json'
import cat4 from 'lotties/the-nyan-cat.json'
import cat5 from 'lotties/cat-in-the-box-christmas.json'
import cat6 from 'lotties/cat-waiting-for-milk.json'
import cat7 from 'lotties/lovely-cats.json'
import cat8 from 'lotties/patuska-cat.json'
import cat9 from 'lotties/pulp-fiction-cat.json'
import cat10 from 'lotties/bad-cat.json'
import { LottieProps } from './types'
import { useState } from 'react'
import { t } from 'utils/css'

const cats = [cat0, cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10]

export const Cat = ({ onComplete, infinite = false }: LottieProps) => {
  const [animation, setAnimation] = useState<unknown>(
    cats[Math.floor(Math.random() * cats.length)]
  )
  const shuffle = () => {
    const newAnimation = cats[Math.floor(Math.random() * cats.length)]
    if (newAnimation === animation) {
      shuffle()
    } else {
      setAnimation(newAnimation)
    }
  }
  return (
    <Lottie
      className={infinite ? t`w-52 ` : ''}
      animationData={animation}
      loop={false}
      onComplete={() => {
        if (infinite) {
          shuffle()
          return
        }
        onComplete?.()
      }}
    />
  )
}
