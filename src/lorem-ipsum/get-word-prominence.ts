import { Word, Words } from './model'

export const getWordProminence = (allWords: Words, targetWord: Word) => {
  const positions = allWords.reduce((array: number[], word, index) => {
    if (word === targetWord) { array.push(index + 1) } // need 1-indexed position for prominence calc
    return array
  }, [])

  const positionsSum = positions.reduce((prev, current) => prev + current, 0)
  return parseFloat(((allWords.length - ((positionsSum - 1) / positions.length)) * (100 / allWords.length)).toFixed(2))
}
