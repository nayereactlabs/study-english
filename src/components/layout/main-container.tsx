import { useViewPort } from 'hooks/use-viewport'
import React, { ReactNode } from 'react'
import { DEBUG } from 'utils/css'

type MainContainerProps = {
  children: ReactNode
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  const { orientation } = useViewPort()

  // If orientation hasn't been determined yet, don't render the content
  if (!orientation) {
    return null
  }

  const centerClass =
    orientation === 'portrait' ? 'items-center' : 'items-start'

  return (
    <div
      className={`w-full h-full grid ${centerClass} justify-center overflow-auto height-full-screen ${
        DEBUG ? 'bg-red-500' : ''
      }`}
    >
      <div className={`h-full py-5 ${DEBUG ? 'bg-green-300' : ''}`}>
        {children}
      </div>
    </div>
  )
}
