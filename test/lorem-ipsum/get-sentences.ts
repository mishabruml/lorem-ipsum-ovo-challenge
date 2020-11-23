import { getSentences } from '../../src/lorem-ipsum/get-sentences'

describe('getSentences', () => {
  for (const { text, expected } of [
    {
      text: 'foo', // no . to delimit
      expected: []
    },
    {
      text: '.', // no words preceeding the .
      expected: []
    },
    {
      text: '.......', // sentences must have words
      expected: []
    },
    {
      text: '',
      expected: []
    },
    {
      text: '      ',
      expected: []
    },
    {
      text: 1 as unknown as string, // test the typechecking
      expected: []
    },
    {
      text: 'hello.',
      expected: ['hello']
    },
    {
      text: 'hello jack.its misha here.how are you.',
      expected: ['hello jack', 'its misha here', 'how are you']
    }
  ]) {
    test(`should return sentences: [${expected}] from text: "${text}"`, () => {
      expect(getSentences(text)).toEqual(expected)
    })
  }
})
