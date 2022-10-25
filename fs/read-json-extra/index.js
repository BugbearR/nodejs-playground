const { readJSONSync } = require("fs-extra");

if (process.argv.length < 3)
{
    console.log(`usage: ${process.argv[0]} ${process.argv[1]} filePath`);
    process.exit(1);
}

const filePath = process.argv[2];

let jsonObj;
try {
    jsonObj = readJSONSync(filePath);
} catch ( e ) {
    console.log(`code:${e.code}`);
    console.log(e.message);
    console.log(e);
}

console.log(jsonObj);
