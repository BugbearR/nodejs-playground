const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
    console.log('Usage: node index.js <file path> <output path>');
}

const filePath = process.argv[2];
const outputPath = process.argv[3];

// https://stackoverflow.com/questions/39322964/extracting-zipped-files-using-jszip-in-javascript
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    JSZip.loadAsync(data)
        .then(zip => {
            // console.log(zip);
            Object.keys(zip.files).forEach(filename => {
                const file = zip.files[filename];
                console.log(file);
                const outFilePath = path.join(outputPath, filename);
                if (file.dir) {
                    const options = {
                        recursive: true
                    };
                    if (file.unixPermissions !== null && (process.platform === 'darwin' || process.platform === 'linux')) {
                        options.mode = file.unixPermissions;
                    }
                    fs.mkdirSync(outFilePath, options);
                    fs.utimesSync(outFilePath, file.date, file.date);
                    return;
                }
                file.async('nodebuffer')
                    .then(content => {
                        const options = {
                            encoding: null
                        };
                        if (file.unixPermissions !== null && (process.platform === 'darwin' || process.platform === 'linux')) {
                            options.mode = file.unixPermissions;
                        }
                        fs.writeFileSync(outFilePath, content, options);
                        fs.utimesSync(outFilePath, file.date, file.date);
                    });
            });
            console.log('done!');
        });
});

