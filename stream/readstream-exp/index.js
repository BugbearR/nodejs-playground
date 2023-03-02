const fs = require("fs");

async function readExp(readStream) {
    return new Promise((resolve, reject) => {
        // readStream.on("close", () => {
        //     console.log("close");
        // });

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

        // readStream.on("readable", () => {
        //     console.log("readable");
        // });

        // readStream.on("resume", () => {
        //     console.log("resume");
        // });
    });
}


(async() => {
    const filePath = process.argv[2];

    const readStream = fs.createReadStream(filePath, "utf8");
    await readExp(readStream);
})();
