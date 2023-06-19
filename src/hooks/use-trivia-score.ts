import { useState } from 'react'

type UseTriviaScoreHook = {
  score: number
  setScore: (newScore: number) => void
  incrementScore: (points?: number) => void
  decrementScore: (points?: number) => void
}

function useTriviaScore(initialScore: number = 100): UseTriviaScoreHook {
  const [score, setScore] = useState<number>(initialScore)

  const incrementScore = (points: number = 1) => {
    setScore((prevScore) => prevScore + points)
  }

  const decrementScore = (points: number = 1) => {
    setScore((prevScore) => prevScore - points)
  }

  return {
    score,
    setScore,
    incrementScore,
    decrementScore
  }
}

export default useTriviaScore
