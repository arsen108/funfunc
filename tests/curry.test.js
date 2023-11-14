import * as F from '../src'

describe('curry', () => {
  test('adds arguments 1 and 2 in an unary way and equals to 3', () => {
    const add = (a, b) => a + b
    const addCurry = F.curry(add)

    expect(addCurry(1)(2)).toBe(3)
  })
})
