import fs from "fs";

function hello() {
    fs.appendFileSync("/tmp/hello.txt", "Hello, ES modules(.js)!\n");
}

export {
    hello
};
