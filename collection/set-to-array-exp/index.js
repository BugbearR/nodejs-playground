const o = new Set();
o.add('a');
o.add('b');
o.add('c');
o.add('a');
o.add('b');
o.add('c');
const r = Array.from(o);
console.log(r);
