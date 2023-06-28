import { useEffectOnce } from 'react-use'

export const useViewPort = () => {
  useEffectOnce(() => {
    const setVhProperty = () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setVhProperty()
    window.addEventListener('resize', setVhProperty)

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', setVhProperty)
    }
  })
}
