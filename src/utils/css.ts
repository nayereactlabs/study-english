import t from 'cntl'
import { colorOptions } from 'config'

export const getColor = (index: number) => {
  return colorOptions[index % colorOptions.length]
}

export { t }
