const unzipper = require('unzipper');
const fs = require('fs');

if (process.argv.length < 3) {
    console.log('Usage: node index.js <file path> <output path>');
}

const filePath = process.argv[2];
const outputPath = process.argv[3];

fs.createReadStream(filePath)
    .pipe(unzipper.Extract({ path: outputPath }))
    .on('close', () => {
        console.log('done!');
    });
