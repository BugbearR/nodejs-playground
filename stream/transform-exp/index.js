const fs = require("fs");
const { Transform } = require('stream');

class TransformExp extends Transform {
    constructor(options) {
        super(options);
    }

    _transform(chunk, encoding, callback) {
        console.log("TransformExp:_transform");
        console.log("chunk:", chunk);
        console.log("encoding:", encoding);
        this.push("[prefix]");
        this.push(chunk);
        this.push("[postfix]");
        callback();
    }

    _flush(callback) {
        console.log("TransformExp:_flush");
        callback();
    }
}

(() => {
    const filePath = process.argv[2];

    const readStream = fs.createReadStream(filePath, "utf8");
    readStream.on("data", (chunk) => {
        console.log("readStream:data");
        console.log(typeof chunk);
        console.log(chunk);
    });

    readStream.on("end", () => {
        console.log("readStream:end");
    });

    readStream.on("error", () => {
        console.log("readStream:error");
    });

    readStream.on("pause", () => {
        console.log("readStream:pause");
    });

    const pipeStream = readStream.pipe(new TransformExp());
    pipeStream.on("data", (chunk) => {
        console.log("pipeStream:data");
        console.log(typeof chunk);
        console.log(chunk);
    });

    pipeStream.on("end", () => {
        console.log("pipeStream:end");
    });

    pipeStream.on("error", () => {
        console.log("pipeStream:error");
    });

    pipeStream.on("pause", () => {
        console.log("pipeStream:pause");
    });

})();
