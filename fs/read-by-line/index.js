#!/usr/bin/env node

const fs = require("fs");
const readline = require('readline');
const {EOL} = require("os");

if (process.argv.length != 4) {
    console.error("usage: read_by_line input_path output_path");
    process.exit(1);
}
const inPath = process.argv[2];
const outPath = process.argv[3];

const inStrm = (inPath === "-") ? process.stdin : fs.createReadStream(inPath);
const outStrm = (outPath === "-") ? process.stdout : fs.createWriteStream(outPath);

const rl = readline.createInterface({
    input: inStrm,
    crlfDelay: Infinity
});

// for await (const lineStr of rl) {
//    outStrm.write(lineStr);
//    outStrm.write(EOL);
// }
rl.on("line", (lineStr) => {
    outStrm.write(lineStr);
    outStrm.write(EOL);
});
