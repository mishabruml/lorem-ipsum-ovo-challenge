import { GroupedItems } from './model'
export const getMostFrequent = <T>(groupedItems: GroupedItems<T>, n: number): T[] => groupedItems.slice(0, n).map(o => o.item)
