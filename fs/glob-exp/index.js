const glob = require("glob");

if (process.argv.length < 3) {
    console.error("usage: glob-exp pattern");
    process.exit(1);
}

const pattern = process.argv[2];

console.log(glob.sync(pattern));
