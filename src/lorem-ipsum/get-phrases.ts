import { Phrases, ParsedSentences } from './model'
export const getPhrases = (parsedSentences: ParsedSentences, nWordsPerPhrase: number): Phrases => {
  const phrases: Phrases = []
  parsedSentences.forEach(sentence => {
    for (let index = 0; index <= sentence.length - nWordsPerPhrase; index++) {
      phrases.push(sentence.slice(index, index + nWordsPerPhrase).join(','))
    }
  })
  return phrases
}
