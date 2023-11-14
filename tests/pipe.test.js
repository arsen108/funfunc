import * as F from '../src'

describe('pipe', () => {
  test('pipe with two functions, first one can have any arity', () => {
    const add = (a, b) => a + b
    const pow2 = (x) => x * x

    const addThenPower = F.pipe(add, pow2)
    const result = addThenPower(2, 3)

    expect(result).toBe(25)
  })
})
