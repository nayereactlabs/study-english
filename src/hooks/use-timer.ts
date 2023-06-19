import { useState, useEffect } from 'react'

const useTimer = (initialSeconds: number) => {
  // Convert initial seconds into minutes and seconds
  const initialMinutes = Math.floor(initialSeconds / 60)
  const remainingSeconds = initialSeconds % 60

  const [minutes, setMinutes] = useState<number>(initialMinutes)
  const [seconds, setSeconds] = useState<number>(remainingSeconds)
  const [timeOver, setTimeOver] = useState<boolean>(false) // Add timeOver flag

  useEffect(() => {
    // Do not start the timer if initialSeconds is 0
    if (initialSeconds === 0) return

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1
        } else if (prevSeconds === 0 && minutes > 0) {
          // Only set seconds to 59 and reduce minutes if there are remaining minutes
          setMinutes((prevMinutes) => prevMinutes - 1)
          return 59
        }
        return 0 // Otherwise, keep seconds at 0
      })

      // Set timeOver flag to true when the countdown is over
      if (minutes === 0 && seconds === 0) {
        setTimeOver(true)
      }
    }, 1000)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [initialSeconds, minutes, seconds]) // Add seconds to the dependencies

  return { minutes, seconds, timeOver }
}

export default useTimer
