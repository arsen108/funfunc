/**
 * Creates a function that is the composition of the provided functions.
 * Each function consumes the return value of the function that follows.
 * In math terms, composing the functions `f()`, `g()`, and `h()` produces `f(g(h()))`.
 * The rightmost function may have any arity; the remaining functions must be unary.
 *
 * @param {...Function} fns - A series of functions to compose.
 * @returns {Function} A function obtained by composing the argument functions from right to left.
 *                     The rightmost function can take multiple arguments, as it provides
 *                     the signature for the resulting composed function.
 */
function compose (...fns) {
  return function (...args) {
    return fns.reduceRight(
      (result, fn, index) =>
        index === fns.length - 1 ? fn(...result) : fn(result),
      args
    )
  }
}
export default compose
