const fs = require("fs");
const crypt = require("crypto");

if (process.argv.length < 3) {
    console.error(`usage: ${process.argv[0]} ${process.argv[1]} file_path`);
    process.exit(1);
}

const data = fs.readFileSync(process.argv[2]);
const hashFunc = crypt.createHash("md5");
hashFunc.update(data);
const hash = hashFunc.digest("hex");
console.log(hash);
