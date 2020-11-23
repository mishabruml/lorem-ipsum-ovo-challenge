import { Text, Word, Phrase, TextStatistics, Words } from './model'
import { getSentences } from './get-sentences'
import { getWords } from './get-words'
import { getLongestWord } from './get-longest-word'
import { groupItems } from './group-items'
import { getMostFrequent } from './get-most-frequent'
import { getPercentageUniqueWords } from './get-percentage-unique-words'
import { getPhrases } from './get-phrases'
import { getWordProminence } from './get-word-prominence'

export const getStats = (text: Text): TextStatistics => {
  if (typeof text === 'string' && text.length) {
    const sentences = getSentences(text)
    const nSentences = sentences.length

    const parsedSentences = getWords(sentences)
    const allWords: Words = parsedSentences.flat(1)
    const nWords = allWords.length

    const longestWord = getLongestWord(allWords)

    const groupedWords = groupItems<Word>(allWords)
    const mostSixFrequentWords = getMostFrequent(groupedWords, 6)
    const percentageUniqueWords = getPercentageUniqueWords(groupedWords, nWords)

    const averageWordsPerSentence = parseFloat((allWords.length / sentences.length).toFixed(2))

    const phrases = getPhrases(parsedSentences, 2) // has to be done by sentence since a phrase cannot span over a sentence

    const groupedPhrases = groupItems<Phrase>(phrases)
    const mostThreeFrequentPhrases = getMostFrequent<Phrase>(groupedPhrases, 3).map(phrase => phrase.split(','))

    const mostFiveFrequentWordsProminence = getMostFrequent(groupedWords, 5).map(word => ({
      word,
      prominence: getWordProminence(allWords, word)
    }))

    return {
      nSentences,
      nWords,
      longestWord,
      mostSixFrequentWords,
      percentageUniqueWords,
      averageWordsPerSentence,
      mostThreeFrequentPhrases,
      mostFiveFrequentWordsProminence
    }
  }
  throw new Error('please provide a non-empty string')
}
