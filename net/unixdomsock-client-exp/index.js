const net = require("net");
const readline = require("readline");

const SOCKET_FILE = "/tmp/unixdomsock.sock";

const client = net.createConnection(SOCKET_FILE);
client.setEncoding("utf-8");

console.log("connected to server");

// client.write('Hello World!');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "MyPrompt> "
});
    
rl.on("close", (line) => {
    console.log("close Event.");
    client.destroy();
});

rl.on("line", (line) => {
    console.log("line Event.");
    console.log({line: line});
    client.write(line);
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
    client.destroy();
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

client.on("error", (err) => {
    console.log("error Event.");
    console.log(err);
});

client.on("close", () => {
    console.log("close Event.");
});

client.on("end", () => {
    console.log("end Event.");
});

// client.on("lookup", (err, address, family, host) => {
//     console.log("lookup Event.");
//     console.log({
//         err: err,
//         address: address,
//         family: family,
//         host: host
//     });
// });

client.on("timeout", () => {
    console.log("timeout Event.");
});

client.on("ready", () => {
    console.log("ready Event.");
});

client.on("drain", () => {
    console.log("drain Event.");
});

client.on("data", (data) => {
    console.log("data Event.");
    console.log({data: data});
    // let utf8decoder = new TextDecoder();
    // const str = utf8decoder.decode(new Uint8Array(data));
    // console.log({str: str});

    // console.log({str: String.fromCharCode.apply(null, new Uint8Array(data))});
    // client.destroy();
});
