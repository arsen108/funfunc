/**
 * Curry function to transform a function that takes multiple arguments
 * into a series of functions.
 * @param {Function} fn - The function to be curried.
 * @returns {Function} - The curried version of the original function.
 */
function curry(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("curry expects a function as an argument");
    }

    const arity = fn.length;

    return function curriedFunction(...args) {
        if (args.length >= arity) {
            return fn(...args);
        }

        return function (...nextArgs) {
            return curriedFunction(...args, ...nextArgs);
        };
    };
}
export default curry;
