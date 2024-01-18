const AdmZip = require('adm-zip');

if (process.argv.length < 3) {
    console.log('Usage: node index.js <file path> <output path>');
}

const filePath = process.argv[2];
const outputPath = process.argv[3];

const zip = new AdmZip(filePath);
// const zipEntries = zip.getEntries();
// zipEntries.forEach(zipEntry => {
//     console.log(zipEntry.entryName);
//     zip.extractEntryTo(zipEntry.entryName, outputPath, false, true);
// });
zip.extractAllTo(outputPath, true);
