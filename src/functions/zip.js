/**
 * Zips two arrays together by combining corresponding elements into pairs.
 * The length of the returned array is equal to the shorter of the two input arrays.
 *
 * @param {Array} a - The first array to zip.
 * @param {Array} b - The second array to zip.
 * @returns {Array<Array>} An array of arrays, where each inner array contains elements from the same index of `a` and `b`.
 */
function zip(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
        throw new TypeError("Both arguments must be arrays");
    }

    const len = Math.min(a.length, b.length);
    const zippedArray = new Array(len);

    for (let i = 0; i < len; i++) {
        zippedArray[i] = [a[i], b[i]];
    }

    return zippedArray;
}

export default zip;
