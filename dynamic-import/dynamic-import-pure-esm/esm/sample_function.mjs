import fs from "fs";

function hello() {
    fs.appendFileSync("/tmp/hello.txt", "Hello, ES modules(.mjs)!\n");
}

export {
    hello
};
