import { Text, Word, Phrase, TextStatistics } from './model'
import { getSentences } from './get-sentences'
import { getWords } from './get-words'
import { getLongestWord } from './get-longest-word'
import { groupItems } from './group-items'
import { loremIpsum } from './lorem-ipsum'
import { getMostFrequent } from './get-most-frequent'
import { getPercentageUniqueWords } from './get-percentage-unique-words'
import { getPhrases } from './get-phrases'

export const getStats = (text: Text): TextStatistics => {
  if (typeof text === 'string' && text.length) {
    const sentences = getSentences(text)
    const nSentences = sentences.length

    const words = getWords(sentences)
    const nWords = words.length

    const longestWord = getLongestWord(words)

    const groupedWords = groupItems<Word>(words)
    const mostSixFrequentWords = getMostFrequent(groupedWords, 6)
    const percentageUniqueWords = getPercentageUniqueWords(groupedWords, nWords)

    const averageWordsPerSentence = parseFloat((words.length / sentences.length).toFixed(2))

    const phrases = getPhrases(words, 2)
    const groupedPhrases = groupItems<Phrase>(phrases)
    const mostThreeFrequentPhrases = getMostFrequent<Phrase>(groupedPhrases, 3).map(phrase => phrase.split(','))

    return {
      nSentences,
      nWords,
      longestWord,
      mostSixFrequentWords,
      percentageUniqueWords,
      averageWordsPerSentence,
      mostThreeFrequentPhrases
    }
  }
  throw new Error('please provide a non-empty string')
}
