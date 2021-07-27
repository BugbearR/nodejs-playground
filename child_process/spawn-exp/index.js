const { spawn } = require("child_process");

console.log(JSON.stringify(process.argv));

const childArgs = process.argv.slice(3);

const child = spawn(process.argv[2], childArgs);

child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
});

child.on("close", (code) => {
    console.log(`child is exited. code: ${code}`);
});
