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

const App = () => {
	// And your own state logic to persist state
	const [location, setLocation] = useState(0)
	const locationChanged = (epubcifi: any) => {
		// epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
		setLocation(epubcifi)
	}
	return (
		<div style={{ height: '100vh' }}>
			<ReactReader
				location={location}
				locationChanged={locationChanged}
				url="https://react-reader.metabits.no/files/alice.epub"
			/>
		</div>
	)
}

export default App
