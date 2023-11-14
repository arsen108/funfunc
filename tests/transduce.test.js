import * as F from '../src'

describe('transduce', () => {
  test('should tranduce on provided collection with filter transducer', () => {
    const arr = Array.from({ length: 12 }, (_, i) => i + 1)

    const isEven = (n) => n % 2 === 0
    const filterTransducer = F.filterTransducer(isEven)
    const reducer = (acc, val) => acc + val
    const result = F.tranduce(filterTransducer, reducer, 0, arr)

    expect(result).toStrictEqual(42)
  })

  test('should tranduce on provided collection with map transducer', () => {
    const arr = [1, 2, 3, 4, 5]

    const multiply = (a, b) => a * b
    const mapTransducer = F.mapTransducer(F.curry(multiply)(2))
    const reducer = (acc, val) => acc + val
    const result = F.tranduce(mapTransducer, reducer, 0, arr)

    expect(result).toStrictEqual(30)
  })
})
