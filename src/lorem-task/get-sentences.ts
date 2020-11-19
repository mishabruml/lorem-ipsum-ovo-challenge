export const getSentences = (text: string) => {
  const matches = text.match(/[\w ]*\./g) ?? []
  return matches?.map(sentence => sentence.replace(/\./, ''))
}
