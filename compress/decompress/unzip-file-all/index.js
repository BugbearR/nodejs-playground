const decompress = require('decompress');

if (process.argv.length < 3) {
    console.log('Usage: node index.js <file path> <output path>');
}

const filePath = process.argv[2];
const outputPath = process.argv[3];

decompress(filePath, outputPath)
    .then(files => {
        console.log(typeof files);
        console.log(files);
        console.log('done!');
    })
    .catch(err => {
        console.log(err);
    });
