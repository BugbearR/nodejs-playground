/**
 * get random string
 * @param {number} len
 * @param {string[]} chars
 */
function generateRandomString( len, chars ) {
    const n = Math.max(0, Math.floor(len));
    if (!Array.isArray(chars) || chars.length === 0) return '';
    let out = '';
    for (let i = 0; i < n; i++) {
        out += chars[Math.floor(Math.random() * chars.length)];
    }
    return out;
}

export default generateRandomString;
