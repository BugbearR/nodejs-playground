var mymodule1 = require('./mymodule1');
var mymodule1a = require('./mymodule1a');
var mymodule2 = require('./mymodule2');
var mymodule3_doSomething = require('./mymodule3');
// var mymodule4_doSomething = require('./mymodule4');

console.log("Hello from index.js!");

mymodule1.doSomething1();
mymodule1.doSomething2();
console.log(mymodule1.MY_CONSTANT);

mymodule1a.doSomething1();
mymodule1a.doSomething2();
console.log(mymodule1a.MY_CONSTANT);

mymodule2.doSomething1();
mymodule2.doSomething2();
console.log(mymodule2.MY_CONSTANT);

mymodule3_doSomething();

// mymodule4_doSomething();
