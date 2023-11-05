/**
 * Applies a transducer to transform a collection using a reducer function.
 * @param {Function} transducer - A function that takes a reducer and returns a new reducer.
 * @param {Function} reducer - A reducer function that accumulates results.
 * @param {*} init - The initial value of the accumulator.
 * @param {Array} collection - The array to transduce over.
 * @returns {*} The final, accumulated value.
 */
function transduce(transducer, reducer, init, collection) {
    const transformedReducer = transducer(reducer);
    return collection.reduce(transformedReducer, init);
}
export default transduce;
