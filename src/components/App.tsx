import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Pictionary from './games/pictionary'
import { useEffect, useRef } from 'react'

function App() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.style.height = `${window.innerHeight}px`
    }
  }, [])

  return (
    <>
      <div
        ref={mainRef}
        className="grid w-full h-screen overflow-y-auto bg-black place-items-center"
      >
        <Pictionary />
      </div>
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default App
