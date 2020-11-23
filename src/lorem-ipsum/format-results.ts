import { TextStatistics } from './model'
import chalk from 'chalk'

export const formatStatistics = ({
  nSentences,
  nWords,
  longestWord,
  mostSixFrequentWords,
  percentageUniqueWords,
  averageWordsPerSentence,
  mostThreeFrequentPhrases,
  mostFiveFrequentWordsProminence
}: TextStatistics) => chalk`The number of sentences is: {yellow ${nSentences}}
The number of words is: {yellow ${nWords}}
The longest word is: {green "${longestWord}"} and its length is: {yellow ${longestWord.length}}
The 6 most frequently occuring words in the text are: [${mostSixFrequentWords.map(s => chalk.green` "${s}"`)} ]
The percentage of the words only occuring once is: {yellow ${percentageUniqueWords}%}
The average number of words per sentence is: {yellow ${averageWordsPerSentence}}
The three most frequently occuring two-word phrases in the text are: [${mostThreeFrequentPhrases.map(s => chalk.green` "${s}"`)} ]
The five most frequent words in the text and their prominence are: [${mostFiveFrequentWordsProminence.map(o => chalk` word: {green "${o.word}"}, prominence: {yellow ${o.prominence}%}`)}]`
