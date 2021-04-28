const dgram = require("dgram");

let port = 3000;
let host = undefined;
// host = "192.168.1.1";

const socket = dgram.createSocket({
    type: "udp6"
});

socket.on("error", (err) => {
    console.log("socket error Event.");
    console.log({message: err.message, stack: err.stack});
});

socket.on("close", () => {
    console.log("socket close Event.");
});

socket.on("connect", () => {
    console.log("socket connect Event.");
});

socket.on("message", (msg, rinfo) => {
    console.log("socket message Event.");
    console.log(msg);
    console.log(rinfo);
    socket.send(msg, rinfo.port, rinfo.address, (error, bytes) => {
        console.log("send result.");
        console.log({error: error, bytes: bytes});
    })
});

socket.on("listening", () => {
    console.log("socket listening Event.");
});

if (host) {
    socket.bind({
        address: host,
        port: port
    });
}
else {
    socket.bind({
        port: port
    });
}
