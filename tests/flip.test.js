import * as F from '../src'

describe('flip', () => {
  test('flips the arguments of the divide function', () => {
    const divide = (a, b) => a / b
    expect(divide(10, 5)).toBe(2)

    const flippedDivide = F.flip(divide)
    expect(flippedDivide(10, 5)).toBe(0.5)
  })
})
