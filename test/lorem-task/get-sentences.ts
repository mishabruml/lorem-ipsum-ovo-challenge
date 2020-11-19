import { getSentences } from '../../src/lorem-task/get-sentences'

describe('getSentences', () => {
  test('should return an array of sentences from a .-separated paragraph', () => {
    expect(getSentences('hello jack.its misha here.how are you.')).toEqual(['hello jack', 'its misha here', 'how are you'])
  })
})
