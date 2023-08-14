import React, { ReactNode } from 'react'

type CenterContainerProps = {
  children: ReactNode
}

export const CenterContainer: React.FC<CenterContainerProps> = ({
  children
}) => {
  return (
    <div className="grid w-full h-screen overflow-y-auto place-items-center">
      {children}
    </div>
  )
}
