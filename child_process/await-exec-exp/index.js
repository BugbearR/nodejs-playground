const util = require("util");
const child_process = require("child_process");

const exec = util.promisify( child_process.exec );

console.log(JSON.stringify(process.argv));

(async function() {
    const out = await exec(process.argv[2]);
    console.log(`stdout: ${JSON.stringify(out.stdout)}`);
})();
