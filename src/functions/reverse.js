/**
 * Reverses the order of the elements in the provided array without mutating the original array.
 * @param {Array} arr - The array to be reversed.
 * @returns {Array} A new array containing the elements of the original array in reverse order.
 */
function reverse(arr) {
    return arr.slice().reverse();
}
export default reverse;
