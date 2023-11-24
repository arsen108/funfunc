/**
 * Reverses the order of the elements in the provided array without mutating the original array.
 * @param {Array} arr - The array to be reversed.
 * @returns {Array} A new array containing the elements of the original array in reverse order.
 */
function reverse(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("reverse expects an array as an argument");
    }

    return arr.slice().reverse();
}
export default reverse;
