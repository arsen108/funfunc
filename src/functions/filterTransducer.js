/**
 * Creates a transducer that filters values based on a predicate function.
 *
 * @param {Function} filterFn - The predicate function to determine if a value should be included.
 * @returns {Function} A transducer function that takes a reducer and returns a new reducer
 *                     that includes values only if they satisfy the predicate function.
 */
function filterTransducer(filterFn) {
    return function (reducer) {
        return function (accumulator, value) {
            if (filterFn(value)) {
                return reducer(accumulator, value);
            } else {
                return accumulator;
            }
        };
    };
}
export default filterTransducer;
