const net = require("net");
const fs = require("fs");

const SOCKET_FILE = "/tmp/unixdomsock.sock";

const server = net.createServer((connection) => {
    console.log("connected.");
    connection.setDefaultEncoding("utf8");
    connection.on("close", (err) => {
        console.log("close Event.");
    });

    connection.on("error", (err) => {
        console.log("error Event.");
        console.log({message: err.message, stack: err.stack});
        console.log(err);
    });
    
    connection.on("data", (data) => {
        console.log("data Event.");
        console.log(data.toString());
        if (data.toString().startsWith("quit")) {
            connection.write("quit received. bye.");
            connection.end();
        }
        connection.write('unix domain socket');
    });
});

try {
    fs.unlinkSync(SOCKET_FILE);
}
catch (e) {
    // Ignore errors when the file does not exist.
}

server.listen(SOCKET_FILE);
