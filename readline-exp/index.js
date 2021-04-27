const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ">"
});

rl.on("close", (line) => {
    console.log("close Event.");
});

rl.on("line", (line) => {
    console.log("line Event.");
    console.log({line: line});
    rl.prompt();
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
});

rl.on("SIGINT", (line) => {
    console.log("SIGINT Event.");
    rl.prompt();
});

rl.on("SIGTSTP", (line) => {
    console.log("SIGTSTP Event.");
});

rl.prompt();
