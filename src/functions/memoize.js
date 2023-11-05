/**
 * Creates a memoized version of the provided function.
 *
 * @param {Function} fn - The function to memoize.
 * @returns {Function} A new function that caches the results of calling `fn` with a given set of arguments.
 */
function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const value = fn(...args);
            cache.set(key, value);
            return value;
        }
    };
}
export default memoize;
