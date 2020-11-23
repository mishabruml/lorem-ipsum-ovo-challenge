import { loremIpsum } from './lorem-ipsum'
import { getStats } from './get-stats'
import { formatStatistics } from './format-results'

console.log(formatStatistics(getStats(loremIpsum)))
