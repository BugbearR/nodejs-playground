const http = require("http");

const server = http.createServer((req, res) => {
    // RFC 7617 HTTP Basic Access Authentication

    if (!req.headers || !req.headers.authorization) {
        res.writeHead(401, {
            "WWW-Authenticate": 'Basic realm="Secure Area"'
        });
        res.end();
        return;
    }

    const auth = req.headers.authorization;
    const [scheme, credentials] = auth.split(" ");
    if (scheme.toUpperCase() !== "BASIC" || !credentials) {
        res.writeHead(400);
        res.end();
        return;
    }

    const [username, password] = Buffer.from(credentials, "base64").toString("utf8").split(":");
    if (username !== "admin" || password !== "password") { // this is a sample code, don't use this in production
        res.writeHead(401, {
            "WWW-Authenticate": 'Basic realm="Secure Area"'
        });
        res.end();
        return;
    }

    const body = "Hello, world! こんにちは世界! \u{1f600}";
    const utf8Body = Buffer.from(body, "utf8");
    res.writeHead(200, {
        "Content-Length": utf8Body.length,
        "Content-Type": "text/plain; charset=UTF-8"
    });
    res.end(utf8Body);
});

server.listen(8080);
