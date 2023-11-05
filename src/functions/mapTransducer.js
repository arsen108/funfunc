/**
 * Creates a transducer that applies a mapping function to each value.
 *
 * @param {Function} mapFn - The function to apply to each value.
 * @returns {Function} A transducer function that takes a reducer and returns a new reducer
 *                     that applies the mapping function to each value before accumulating.
 */
function mapTransducer(mapFn) {
    return function (reducer) {
        return function (accumulator, value) {
            return reducer(accumulator, mapFn(value));
        };
    };
}
export default mapTransducer;
