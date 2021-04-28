const dgram = require("dgram");
const readline = require("readline");

let localPort = 0;
let localHost = undefined;
// host = "192.168.1.1";
let remotePort = 3000;
// let remoteHost = "192.168.97.11";
let remoteHost = "localhost";

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
});

socket.on("listening", () => {
    console.log("socket listening Event.");
});

if (localHost) {
    socket.bind({
        address: localHost,
        port: localPort
    });
}
else {
    socket.bind({
        port: localPort
    });
}

// socket.connect({
//     address: remoteHost,
//     port: remotePort
// });

socket.connect(remotePort, remoteHost);

// client.write('Hello World!');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "MyPrompt> "
});

rl.on("close", (line) => {
    console.log("close Event.");
    // if (connected) {
        socket.close();
    // }
});

rl.on("line", (line) => {
    console.log("line Event.");
    console.log({line: line});
    // socket.send(line, remotePort, remoteHost, (error, bytes) => {
    //     console.log("send result.");
    //     console.log({error: error, bytes: bytes});
    // });
    socket.send(line, (error, bytes) => {
        console.log("send result.");
        console.log({error: error, bytes: bytes});
    });
    setTimeout(() => {rl.prompt();}, 300);
});

rl.on("history", (line) => {
    console.log("history Event.");
});

rl.on("pause", (line) => {
    console.log("pause Event.");
});

rl.on("resume", (line) => {
    console.log("resume Event.");
});

rl.on("SIGCONT", (line) => {
    console.log("SIGCONT Event.");
    // rl.resume();
    // socket.destroy();
    rl.destroy();
});

rl.on("SIGINT", (line) => {
    console.log("SIGINT Event.");
    
});

rl.on("SIGTSTP", (line) => {
    console.log("SIGTSTP Event.");
    // rl.pause();
});

rl.prompt();
