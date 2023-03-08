var crypto = require("crypto");

function f(k) {
    switch (k) {
    case "0":
        return 0;
    case "1":
        return 1;
    case "2":
        return 2;
    case "3":
        return 3;
    case "4":
        return 4;
    case "5":
        return 5;
    case "6":
        return 6;
    case "7":
        return 7;
    case "8":
        return 8;
    case "9":
        return 9;
    case "a":
        return 10;
    case "b":
        return 11;
    case "c":
        return 12;
    case "d":
        return 13;
    case "e":
        return 14;
    case "f":
        return 15;
    default:
        return undefined;
    }
}

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
    s += f(c);
});
var endTick = performance.now();
console.log(endTick - startTick);
console.log(s);
