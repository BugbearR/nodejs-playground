const fs = require("fs");

(() => {
    const filePath = process.argv[2];

    const readStream = fs.createReadStream(filePath, "utf8");
    readStream.on("data", (chunk) => {
        console.log(typeof chunk);
        console.log(chunk);
    });

    readStream.on("end", () => {
        console.log("end");
    });

    readStream.on("error", () => {
        console.log("error");
    });

    readStream.on("pause", () => {
        console.log("pause");
    });
})();
