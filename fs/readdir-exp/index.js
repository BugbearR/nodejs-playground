const fs = require("fs");
// import fs from "fs";
const path = require("path");
// import path from "path";

const dir = process.argv[2];

(async() => {
    try {
        const files = await fs.promises.readdir(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = await fs.promises.stat(fullPath);
            if (stat.isFile()) {
                console.log(`${fullPath} is file.`);
            }
            else if (stat.isDirectory()) {
                console.log(`${fullPath} is directory.`);
            }
        }
    }
    catch ( err ) {
        console.log(err.message);
        console.log(err.stack);
    }
})();
