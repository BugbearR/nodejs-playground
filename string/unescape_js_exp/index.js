#!/usr/bin/env node

const fs = require("fs");
const readline = require('readline');
const {EOL} = require("os");
const unescapeJs = require('unescape-js');

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

rl.on("line", (lineStr) => {
    outStrm.write(unescapeJs(lineStr));
    outStrm.write(EOL);
});

