const fs = require("fs");
const crypto = require("crypto");

if (process.argv.length < 3) {
    console.error(`usage: ${process.argv[0]} ${process.argv[1]} file_path`);
    process.exit(1);
}

const stream = fs.createReadStream(process.argv[2]);
const hashFunc = crypto.createHash("md5");
stream.pipe(hashFunc);
stream.on("end", () => {
    const hash = hashFunc.digest("hex");
    console.log(hash);
});
stream.on("error", (err) => {
    console.error(err);
    process.exit(1);
});
