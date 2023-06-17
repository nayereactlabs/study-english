import { colorOptions } from 'config'

export const getColor = (index: number) => {
  return colorOptions[index % colorOptions.length]
}
