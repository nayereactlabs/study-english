import { ToastContainer } from 'react-toastify'
import Pictionary from './games/pictionary'
import { useEffect, useRef, useState } from 'react'
import { getPictinaryTopics, getPictinaryWords } from 'libs/openia'
import { shuffleArray } from 'utils'
import { useEffectOnce } from 'react-use'
import { useViewPort } from 'hooks/use-viewport'

import 'react-toastify/dist/ReactToastify.css'
import 'react-simple-keyboard/build/css/index.css'
import './app.css'
import { ReactReader } from 'react-reader'
import { ImagePickerGallery } from 'trivia-generators/image-picker-gallery'
import { MainContainer } from './layout/main-container'

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

	return (
		<main>
			<MainContainer>

				<ImagePickerGallery />
			</MainContainer>
			<ToastContainer autoClose={2000} />
		</main>
	)
}

export default App
