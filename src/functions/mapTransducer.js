/**
 * Creates a transducer that applies a mapping function to each value.
 *
 * @param {Function} mapFn - The function to apply to each value.
 * @returns {Function} A transducer function that takes a reducer and returns a new reducer
 *                     that applies the mapping function to each value before accumulating.
 */
function mapTransducer(mapFn) {
    if (typeof mapFn !== "function") {
        throw new TypeError("mapTransducer expects a function as an argument");
    }
    return function (reducer) {
        if (typeof reducer !== "function") {
            throw new TypeError("The reducer should be a function");
        }
        return function (accumulator, value) {
            return reducer(accumulator, mapFn(value));
        };
    };
}
export default mapTransducer;
