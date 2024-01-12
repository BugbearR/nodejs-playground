const fs = require('fs');

if (process.argv.length < 3)
{
    console.log(`usage: ${process.argv[0]} ${process.argv[1]} filePath`);
    process.exit(1);
}

const filePath = process.argv[2];

const readStream = fs.createReadStream(filePath);

readStream.on("data", (chunk) => {
    console.log("data");
    console.log(chunk);
});

readStream.on('end', () => {
    console.log("end");
});

readStream.on('error', (err) => {
    console.error("Error occured.:", err);
});
