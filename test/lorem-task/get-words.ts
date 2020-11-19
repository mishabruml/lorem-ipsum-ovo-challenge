import { getWords } from '../../src/lorem-task/get-words'

describe('getWords', () => {
  test('should return an array of arrays of words from an array of space-separated sentence strings', () => {
    expect(getWords(['hello jack', 'its misha here', 'how are you'])).toEqual(
      ['hello', 'jack', 'its', 'misha', 'here', 'how', 'are', 'you']
    )
  })
})
