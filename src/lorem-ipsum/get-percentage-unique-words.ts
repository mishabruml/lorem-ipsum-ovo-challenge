import { GroupedItems, Word } from './model'

export const getPercentageUniqueWords = (grouped: GroupedItems<Word>, nWords: number): number =>
  parseFloat(((grouped.filter(o => o.count === 1).length / nWords) * 100).toFixed(2))
