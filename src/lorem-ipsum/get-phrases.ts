import { Words, Phrases } from './model'
export const getPhrases = (words: Words, nWordsPerPhrase: number): Phrases =>
  words.map((_, index) => (words.slice(index, index + nWordsPerPhrase).join(',')))
