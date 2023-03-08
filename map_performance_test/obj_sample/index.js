var crypto = require("crypto");

var o = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "a": 10,
    "b": 11,
    "c": 12,
    "d": 13,
    "e": 14,
    "f": 15
};

const data = [];
for (i = 0; i < 1000000; i++) {
    data.push(crypto.randomBytes(1).toString('hex').substring(0, 1));
}

var startTick2 = performance.now();
data.forEach(()=>{});
var endTick2 = performance.now();
console.log(endTick2 - startTick2);

var s = 0;
var startTick = performance.now();
data.forEach((c) => {
    s += o[c];
});
var endTick = performance.now();
console.log(endTick - startTick);
console.log(s);
