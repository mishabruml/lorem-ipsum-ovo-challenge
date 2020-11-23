import { Word, Words } from './model'

export const getLongestWord = (words: Words): Word => words.reduce((prev, current) => {
  return prev.length < current.length ? current : prev
})
