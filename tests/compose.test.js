import * as F from '../src'

describe('compose', () => {
  test('copmose with two functions, first one can have any arity', () => {
    const add = (a, b) => a + b
    const pow2 = (x) => x * x

    const addThenPower = F.compose(pow2, add)
    const result = addThenPower(2, 3)

    expect(result).toBe(25)
  })
})
