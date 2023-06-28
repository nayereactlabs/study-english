import t from 'cntl'
import { colorOptions } from 'config'

export const DEBUG = import.meta.env.VITE_DEBUG

export const getColor = (index: number) => {
  return colorOptions[index % colorOptions.length]
}

export { t }
