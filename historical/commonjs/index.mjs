import * as mymodule1 from "./mymodule1.js";
import * as mymodule1a from "./mymodule1a.js";
import * as mymodule2 from "./mymodule2.js";
import mymodule3_doSomething from "./mymodule3.js";

mymodule1.doSomething1();
mymodule1.doSomething2();
console.log(mymodule1.MY_CONSTANT);

mymodule1a.doSomething1();
mymodule1a.doSomething2();
console.log(mymodule1a.MY_CONSTANT); // ???

mymodule2.doSomething1();
mymodule2.doSomething2();
console.log(mymodule2.MY_CONSTANT);

mymodule3_doSomething();
