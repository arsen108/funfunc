/**
 * Creates a function that is the negation of the provided predicate function.
 * The predicate function can take any number of arguments and returns a boolean value.
 *
 * @param {Function} fn - A predicate function to negate. This function can accept any number of arguments.
 * @returns {Function} A new function that, when called with any number of arguments, will return the negation
 *                     of the original predicate function's result.
 */
function not(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("not expects a function as an argument");
    }
    return function (...args) {
        return !fn(...args);
    };
}
export default not;
