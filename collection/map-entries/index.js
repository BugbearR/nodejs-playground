const m = new Map([["k1", "v1"], ["k2", "v2"]]);

// simple loop
m.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// raw iterator
const iter = m.entries();
let item = iter.next();
while (! item.done ) {
    const [key, value] = item.value;
    console.log(`${key}: ${value}`);
    item = iter.next();
}

// for-of
for (const [key, value] of m.entries()) {
    console.log(`${key}: ${value}`);
}

for (const key of m.keys()) {
    console.log(key);
}

for (const value of m.values()) {
    console.log(value);
}
