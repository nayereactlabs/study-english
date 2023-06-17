import { Surprise } from './animations/sorprise'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import FindWord from './games/find-word'

function App() {
  return (
    <>
      <FindWord />
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default App
