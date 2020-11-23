export type Text = string

export type Word = string
export type Words = Word[]

export type Sentence = string
export type Sentences = Sentence[]

export type Phrase = Word
export type Phrases = Word[]

export interface GroupedItem<T> {
  item: T
  count: number
}

export type GroupedItems<T> = Array<GroupedItem<T>>

export interface TextStatistics {
  nSentences: number
  nWords: number
  longestWord: Word
  mostSixFrequentWords: Words
  percentageUniqueWords: number
  averageWordsPerSentence: number
  mostThreeFrequentPhrases: Phrases[]
}
