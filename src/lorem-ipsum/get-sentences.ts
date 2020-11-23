import { Sentences, Text } from './model'

export const getSentences = (text: Text): Sentences => {
  const matches = typeof text === 'string' ? text.match(/[\w ]+\./g) : null
  return matches?.map(sentence => sentence.replace(/\./, '')) ?? []
}
