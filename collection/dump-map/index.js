const m = new Map([["k1", "v1"], ["k2", "v2"]]);

// since Node.js ver.12
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
console.log(JSON.stringify(Object.fromEntries(m)));
