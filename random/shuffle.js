/**
 * shuffle array
 * @param {any[]} a
 */
function shuffle(a) {
    for (let i = 0; i < a.length; i++) {
        const j = Math.floor((a.length - i) * Math.random()) + i;
        if (i != j) {
            const t = a[i];
            a[i] = a[j];
            a[j] = t;
        }
    }
}

export default shuffle;
