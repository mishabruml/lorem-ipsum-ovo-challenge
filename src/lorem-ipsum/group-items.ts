import { GroupedItems, Words, Phrases } from './model'

export const groupItems = <T>(items: Words | Phrases): GroupedItems<T> => {
  const counts: {[key: string]: number} = {}
  items.map(item => {
    counts[item] ? counts[item]++ : counts[item] = 1
  })

  return Object.entries(counts).map(o => ({ item: o[0] as unknown as T, count: o[1] })).sort((a, b) => b.count - a.count)
}
