const { exec } = require("child_process");

// console.log(process.argv);
if (process.argv.length < 3)
{
    console.log(`usage: ${process.argv[0]} ${process.argv[1]} <command> [args ...]`);
    process.exit(1);
}

const args = process.argv.slice(2);

const execArgs = args.map((arg) => {
    return `'${arg.replace("'", "'\\''")}'`
}).join(" ");

// console.log(execArgs);
const child = exec(execArgs, function(err, stdout, stderr) {
    console.log("command end");
    console.log(`typeof err: ${typeof err}`);
    console.log(`typeof err: ${Object.prototype.toString(err)}`);
    console.log(`JSON err: ${JSON.stringify(err)}`);
    console.log(`err: ${err}`);
    console.log(`typeof stderr: ${typeof stderr}`);
    console.log(`stderr: ${stderr}`);
    console.log(`typeof stdout: ${typeof stdout}`);
    console.log(`stdout: ${stdout}`);
    if (err) {
        process.exit(1);
    }
});
console.log("end");
