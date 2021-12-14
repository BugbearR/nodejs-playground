const { execSync } = require("child_process");

// console.log(JSON.stringify(process.argv));
if (process.argv.length < 3)
{
    console.log(`usage: ${process.argv[0]} ${process.argv[1]} <command> [args ...]`);
    process.exit(1);
}

const args = process.argv.slice(2);

const execArgs = args.map((arg) => {
    return `'${arg.replace("'", "'\\''")}'`
}).join(" ");

console.log(execArgs);
try
{
    const result = execSync(execArgs);
    console.log("command end");
    console.log(`typeof result: ${typeof result}`);
    console.log(`typeof result: ${Object.prototype.toString(result)}`);
    console.log(`JSON result: ${JSON.stringify(result)}`);
    console.log("end");
}
catch (e)
{
    console.log(e);
    console.log("e.message:");
    console.log(e.message);
    console.log("e.stack:");
    console.log(e.stack);
    console.log(JSON.stringify(e));
}
console.log("end");
