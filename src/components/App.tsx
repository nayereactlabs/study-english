import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Pictionary from './games/pictionary'
import { useEffect, useRef, useState } from 'react'
import './app.css'
import { getPictinaryTopics, getPictinaryWords } from 'libs/openia'
import { shuffleArray } from 'utils'

function App() {
  const mainRef = useRef<HTMLDivElement>(null)

  const [words, setWords] = useState<string[]>([])

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.style.height = `${window.innerHeight}px`
    }
    getPictinaryTopics().then((topics) => {
      const topic = shuffleArray([...topics])[0]
      getPictinaryWords(topic).then((words) => {
        console.log(words)
        setWords(words)
      })
    })
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
