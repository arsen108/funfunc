/**
 * Creates a partially applied function from the provided function.
 * The partial function allows arguments to be applied one at a time.
 *
 * @param {Function} fn - The function to partially apply.
 * @param {Array} fixedArgs - An array of arguments that should be held fixed in the resulting partial function.
 * @returns {Function} A new partially applied function that can take the next argument or be executed if all arguments are provided.
 */
function partial(fn, ...fixedArgs) {
    if (typeof fn !== "function") {
        throw new TypeError("partial expects a function as the first argument");
    }
    function partialApplied(...currentArgs) {
        return function (...nextArgs) {
            const allArgs = [...currentArgs, ...nextArgs];
            const arity = fn.length;

            if (allArgs.length >= arity) {
                return fn(...allArgs);
            } else {
                return partialApplied(...allArgs);
            }
        };
    }

    return partialApplied(...fixedArgs);
}
export default partial;
