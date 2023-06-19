// Example usage
// const myArray: number[] = [1, 2, 3, 4, 5]
// const shuffledArray: number[] = shuffleArray(myArray)
// console.log(shuffledArray)

export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export function assertFulfilled<T>(
  item: PromiseSettledResult<T>
): item is PromiseFulfilledResult<T> {
  return item.status === 'fulfilled'
}

export const getRandomItem = (items: any[]) => {
  return items[Math.floor(Math.random() * items.length)]
}
