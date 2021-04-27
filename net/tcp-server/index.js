const net = require("net");

let port = 3000;
let host = undefined;
// host = "192.168.1.1";

const server = net.createServer((socket) => {
    console.log("server connection Event.");
    console.log(socket.address());

    socket.on("error", (err) => {
        console.log("socket error Event.");
        console.log({message: err.message, stack: err.stack});
    });

    socket.on("end", () => {
        console.log("socket end Event.");
    });

    socket.on("close", (hadError) => {
        console.log("socket close Event.");
        console.log({hadError: hadError});
    });

    socket.on("data", (data) => {
        console.log("socket data Event.");
        console.log({data: data});
    });
});

server.on("error", (err) => {
    console.log("server error Event.");
    console.log({message: err.message, stack: err.stack});
});

server.on("close", () => {
    console.log("server close Event.");
});

// server.on("connection", () => {
//     console.log("server connection Event.")
// });

server.on("listening", () => {
    console.log("server listening Event.");
    server
});

if (host) {
    server.listen({
        host: host,
        port: port
    });
}
else {
    server.listen({
        port: port
    });
}
