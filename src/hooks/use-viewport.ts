import { useState } from 'react'
import { useEffectOnce } from 'react-use'

export const useViewPort = () => {
  const [orientation, setOrientation] = useState<
    'portrait' | 'landscape' | null
  >(null)

  useEffectOnce(() => {
    const setVhProperty = () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      setOrientation(
        window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
      )
    }

    setVhProperty() // This will also set the initial orientation

    // can trigger mobile browsers to hide the address bar
    window.scrollTo(0, 1)

    window.addEventListener('resize', setVhProperty)

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', setVhProperty)
    }
  })
  return { orientation }
}
