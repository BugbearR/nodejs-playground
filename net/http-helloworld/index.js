const http = require("http");

const server = http.createServer((req, res) => {
    const body = "Hello, world! こんにちは世界! \u{1f600}";
    const utf8Body = Buffer.from(body, "utf8");
    res.writeHead(200, {
        "Content-Length": utf8Body.length,
        "Content-Type": "text/plain; charset=UTF-8"
    });
    res.end(utf8Body);
});

server.listen(8080);
