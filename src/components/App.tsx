import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Pictionary from './games/pictionary'
import { useEffect, useRef, useState } from 'react'
import './app.css'
import { getPictinaryTopics, getPictinaryWords } from 'libs/openia'
import { shuffleArray } from 'utils'
import { useEffectOnce } from 'react-use'

function App() {
  const mainRef = useRef<HTMLDivElement>(null)

  const [words, setWords] = useState<string[]>([])

  useEffectOnce(() => {
    getPictinaryTopics().then((topics) => {
      const topic = shuffleArray([...topics])[0]
      getPictinaryWords(topic).then((words) => {
        setWords(words)
      })
    })
  })

  const updateHeight = () => {
    if (mainRef.current) {
      mainRef.current.style.height = `${window.innerHeight}px`
    }
  }

  useEffect(() => {
    updateHeight() // Update the height on initial render
    window.addEventListener('resize', updateHeight) // Update the height whenever the window is resized

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [])

  return (
    <>
      <div
        ref={mainRef}
        className="grid w-full h-screen overflow-y-auto place-items-center"
      >
        <Pictionary words={words} />
      </div>
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default App
