#!/usr/bin/env node

const fs = require("fs");

if (process.argv.length != 3) {
    console.error("usage: fs-unlinksync-exp path");
    process.exit(1);
}
const path = process.argv[2];

fs.unlinkSync(path);
