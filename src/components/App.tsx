import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Pictionary from './games/pictionary'
import { useEffect, useRef, useState } from 'react'
import './app.css'
import { getPictinaryTopics, getPictinaryWords } from 'libs/openia'
import { shuffleArray } from 'utils'
import { useEffectOnce } from 'react-use'
import { useViewPort } from 'hooks/use-viewport'

function App() {
  // useEffectOnce(() => {
  //   const fetchWords = async () => {
  //     const topics = await getPictinaryTopics()
  //     const topic = shuffleArray([...topics])[0]
  //     const words = await getPictinaryWords(topic)
  //     setWords(words)
  //   }

  //   fetchWords()
  // })

  useViewPort()

  return (
    <main>
      <div className="flex items-center justify-center w-full height-full-screen">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">Hello.</div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </main>
  )
}

export default App
