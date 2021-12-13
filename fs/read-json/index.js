const fs = require("fs");

if (process.argv.length < 3)
{
    console.log(`usage: ${process.argv[0]} ${process.argv[1]} filePath`);
    process.exit(1);
}

const filePath = process.argv[2];

const jsonObj = JSON.parse(fs.readFileSync(filePath, 'UTF-8'));

console.log(jsonObj);
