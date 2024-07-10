const fs = require("fs");

function hello() {
    fs.appendFileSync("/tmp/hello.txt", "Hello, CommonJS(.js)!\n");
}

module.exports = {
    hello: hello
};
