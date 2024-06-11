/**
 * Converts an array of key-value pairs into an object.
 *
 * @param {Array} a - The array of key-value pairs.
 * @returns {Object} - The resulting object.
 */
function toObjectFromKeyValueArray(a) {
    return a.reduce((acc, val) => {
        acc[val[0]] = val[1];
        return acc;
    }, {});
}

export default toObjectFromKeyValueArray;
