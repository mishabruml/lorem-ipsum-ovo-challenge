import { TextStatistics } from './model'

export const formatStatistics = ({
  nSentences,
  nWords,
  longestWord,
  mostSixFrequentWords,
  percentageUniqueWords,
  averageWordsPerSentence,
  mostThreeFrequentPhrases
}: TextStatistics) => `The number of sentences is: ${nSentences}
The number of words is: ${nWords}
The longest word is: "${longestWord}" and its length is: ${longestWord.length}
The 6 most frequently occuring words in the text are: [ ${mostSixFrequentWords.map(s => `"${s}"`)} ]
The percentage of the words only occuring once is: ${percentageUniqueWords}%
The average number of words per sentence is: ${averageWordsPerSentence}
The three most frequently occuring two-word phrases in the text are: [ ${mostThreeFrequentPhrases.map(s => `"${s}"`)} ]`
