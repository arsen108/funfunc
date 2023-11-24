/**
 * Creates a new function that invokes the provided function with the first two arguments reversed,
 * while maintaining the context and the rest of the arguments in their original order.
 *
 * @param {Function} fn - The function to flip arguments for.
 * @returns {Function} A new function with the first two arguments of the input function flipped.
 */
function flip(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("flip expects a function as an argument");
    }
    return function (...args) {
        if (args.length < 2) {
            throw new Error("flip function requires at least two arguments to be passed to the flipped function.");
        }

        return fn(args[1], args[0], ...args.slice(2));
    };
}
export default flip;
