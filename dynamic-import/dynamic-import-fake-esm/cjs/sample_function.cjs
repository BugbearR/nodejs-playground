const fs = require("fs");

function hello() {
    fs.appendFileSync("/tmp/hello.txt", "Hello, CommonJS(.cjs)!\n");
}

module.exports = {
    hello: hello
};
