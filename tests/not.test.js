import * as F from '../src'

describe('not', () => {
  test('negates the function passed to it', () => {
    function isEven (n) {
      return n % 2 === 0
    }
    const isOdd = F.not(isEven)

    const filteredList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(isOdd)
    expect(filteredList).toStrictEqual([1, 3, 5, 7, 9])
  })
})
