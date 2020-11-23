import { Word } from './model'

export const getLongestWord = (allWords: Word[]): Word => allWords.reduce((prev, current) => {
  return prev.length < current.length ? current : prev
})
