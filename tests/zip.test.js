import * as F from '../src'

describe('zip', () => {
  test('zips two arrays by combining corresponding elements into pairs', () => {
    const arr1 = [1, 2, 3]
    const arr2 = ['a', 'b', 'c']
    const zippedArray = [
      [1, 'a'],
      [2, 'b'],
      [3, 'c']
    ]

    expect(F.zip(arr1, arr2)).toStrictEqual(zippedArray)
  })
})
