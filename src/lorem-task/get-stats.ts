import { getSentences } from './get-sentences'
import { getWords } from './get-words'
import { loremIpsum } from './lorem-ipsum'

const sentences = getSentences(loremIpsum)
const words = getWords(sentences)

console.log(sentences.length)
console.log(words.length)

const longest = words.reduce((prev, current) => {
  return prev.length < current.length ? current : prev
})

console.log(longest.length)
