import { ParsedSentences } from './model'

export const getWords = (sentences: string[]): ParsedSentences =>
  typeof sentences === 'object' // can only map over array
    ? sentences
      .filter(sentence => typeof sentence === 'string') // make sure all sentences are strings
      .map(sentence => sentence.split(' ').filter(word => word.length)) // split into words and filter out any words with no length
    : []
