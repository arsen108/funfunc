import compose from './compose'
import reverse from './reverse'

/**
 * Creates a function that is the composition of the provided functions, where each function
 * is executed with the return value of the function that preceded it. The execution order
 * is from left to right, which is a reverse of `compose`. The first function in the sequence
 * can accept any number of arguments; the remaining functions should be unary.
 *
 * @param {...Function} fns - A series of functions to pipe.
 * @returns {Function} A function obtained by piping the input functions from left to right.
 */
function pipe (...fns) {
  return compose(...reverse(fns))
}
export default pipe
