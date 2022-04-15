const url = require("url");

const targetUrl = process.argv[2];

const parsedUrl = url.parse(targetUrl);

console.log(parsedUrl);
