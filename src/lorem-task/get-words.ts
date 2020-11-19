export const getWords = (sentences: string[]) => sentences?.flatMap(sentence => sentence.split(' '))
