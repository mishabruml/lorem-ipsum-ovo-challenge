import { getWords } from '../../src/lorem-ipsum/get-words'

describe('getWords', () => {
  for (const { sentences, expected } of [
    {
      sentences: ['hello'], // this could feasibly come through as a sentence if we had foo.hello.bar
      expected: ['hello']
    },
    {
      sentences: [''], // space word filtered out
      expected: []
    },
    {
      sentences: ['hello.me'], // shouldn't be possible to recieve this as a sentence, but technically correct result
      expected: ['hello.me']
    },
    {
      sentences: ['hello my name is  misha'], // double space means one word is a " " character, should be filtered out
      expected: ['hello', 'my', 'name', 'is', 'misha']
    },
    {
      sentences: ['hello jack', 'its misha here', 'how are you'],
      expected: ['hello', 'jack', 'its', 'misha', 'here', 'how', 'are', 'you']
    },
    {
      sentences: 'not an array' as unknown as any[],
      expected: []
    },
    {
      sentences: 1 as unknown as any[],
      expected: []
    },
    {
      sentences: [1, 2, 3] as unknown as any[],
      expected: []
    },
    {
      sentences: [1, 'foo bar', 2] as unknown as any[], // it will filter out the non-strings
      expected: ['foo', 'bar']
    }
  ]) {
    test(`should return words: [${expected}] from space-separated sentence strings: [${sentences}]`, () => {
      expect(getWords(sentences)).toEqual(expected)
    })
  }
})
